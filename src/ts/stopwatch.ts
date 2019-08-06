/**
 * ストップウォッチの機能を提供する。
 */

import { Time } from './time';

export class Stopwatch {

  /**
 * ストップウォッチ処理を行う。
 */
  public startTimerAfterClicking(stopwatchId: string): void {

    let workStartBtn = document.getElementById('work-start-btn' + stopwatchId);
    if (workStartBtn != null) {
      // クリックした回数。ストップウォッチを停止するか開始するか判断するために使用する。
      let numClicked = 0;
      let timer = new Time();

      workStartBtn.addEventListener('click', () => {
        numClicked++;
        if (workStartBtn != null) {
          // ボタンの見た目を変える。
          this.changeBtn(numClicked, workStartBtn);
          // ストップウォッチ処理を行う。
          this.countTime(numClicked, timer, stopwatchId);
        }
      });
    }
  };

  /**
   * ボタンのクリック回数に応じて、ボタンの文字、styleを変更する。
   * クリック回数が奇数の場合、表示文字を「一時停止」、styleをbtn-dangerに変更する。
   * クリック回数が偶数の場合、表示文字を「再開」、styleをbtn-primaryに変更する。
   * @param numClicked 作業開始ボタンのクリック回数。
   * @param workStartBtn 作業開始ボタンのElementオブジェクト。
   */
  public changeBtn(numClicked: number, workStartBtn: Element): void {
    if (numClicked % 2 == 1) {
      workStartBtn.innerHTML = '一時停止';
      workStartBtn.classList.add('btn-danger');
      workStartBtn.classList.remove('btn-primary');
    } else {
      workStartBtn.innerHTML = '再開';
      workStartBtn.classList.add('btn-primary');
      workStartBtn.classList.remove('btn-danger');
    }
  }

  /**
   * 経過時間をカウントアップする。
   * @param numClicked ボタンがクリックされた回数。 
   * @param counter setIntervalを入れるオブジェクト。
   */
  public countTime(numClicked: number, counter: Time, stopwatchId: string): void {
    if (numClicked % 2 != 0) {
      // ボタンを押した回数が奇数の場合は、ストップウォッチを開始または再開する。
      let secElm = document.getElementById('work-sec' + stopwatchId);
      let minElm = document.getElementById('work-min' + stopwatchId);
      let hourElm = document.getElementById('work-hour' + stopwatchId);

      counter.setCounter(setInterval(() => {
        counter.setSecCount(counter.getSecCount() + 1);
        if (secElm != null) {
          if (counter.getSecCount() == 60) {
            counter.setSecCount(0);
            counter.setMinCount(counter.getMinCount() + 1);
            if (counter.getMinCount() == 60) {
              counter.setMinCount(0);
              counter.setHourCount(counter.getHourCount() + 1);
            }
            if (minElm != null) {
              minElm.innerHTML = ('0' + String(counter.getMinCount())).slice(-2);
            }
            if (hourElm != null) {
              hourElm.innerHTML = ('0' + String(counter.getHourCount())).slice(-2);
            }
          }
          secElm.innerHTML = ('0' + String(counter.getSecCount())).slice(-2);
        }
      }, 1000));
    } else {
      // ボタンを押した回数が偶数の場合は、ストップウォッチを停止する。
      clearInterval(counter.getCounter());
    }
  };
}