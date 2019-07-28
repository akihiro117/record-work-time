import { TimeCount } from './time-count';
// Bootstrapのスタイルシート側の機能を読み込む
import 'bootstrap/dist/css/bootstrap.min.css';

// BootstrapのJavaScript側の機能を読み込む
import 'bootstrap';

// Htmlを読み込んだ後に実行。
document.addEventListener('DOMContentLoaded', () => {
  startCount();
}, false);

/**
 * タイマー処理を行う。
 */
function startCount(): void {

  let workStartBtn = document.getElementById('work-start-btn');
  if (workStartBtn != null) {
    let numClicked = 0;
    let timer = new TimeCount();

    workStartBtn.addEventListener('click', () => {
      numClicked++;
      if (workStartBtn != null) {
        changeBtn(numClicked, workStartBtn);
        countTime(numClicked, timer);
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
function changeBtn(numClicked: number, workStartBtn: Element): void {
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
 * @param timer setIntervalを入れるオブジェクト。
 */
function countTime(numClicked: number, timer: TimeCount): void {
  if (numClicked % 2 != 0) {
    let secElm = document.getElementById('work-sec');
    let minElm = document.getElementById('work-min');
    let hourElm = document.getElementById('work-hour');

    timer.setTimer(setInterval(() => {
      timer.setSecCount(timer.getSecCount() + 1);
      if (secElm != null) {
        if (timer.getSecCount() == 60) {
          timer.setSecCount(0);
          timer.setMinCount(timer.getMinCount() + 1);
          if (timer.getMinCount() == 60) {
            timer.setMinCount(0);
            timer.setHourCount(timer.getHourCount() + 1);
          }
          if (minElm != null) {
            minElm.innerHTML = ('0' + String(timer.getMinCount())).slice(-2);
          }
          if (hourElm != null) {
            hourElm.innerHTML = ('0' + String(timer.getHourCount())).slice(-2);
          }
        }
        secElm.innerHTML = ('0' + String(timer.getSecCount())).slice(-2);
      }
    }, 1000));
  } else {
    clearInterval(timer.getTimer());
  }
};