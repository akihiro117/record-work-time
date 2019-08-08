/**
 * ストップウォッチの追加に関するクラス。
 */

import $ from 'jquery';

import { Stopwatch } from './stopwatch';

export class StopwatchMaker {

  /**
   * ストップウォッチを追加。
   */
  public addStopwatch(): void {
    const STOPWATCH_ID_PREFIX = 'stopwatch';
    // 作業追加ボタン。
    let workAddBtn = document.getElementById('work-add-btn');
    if (workAddBtn != null) {
      // 現在表示されている作業の数。複製した要素のIDに付与する。
      let numWork = 1;
      workAddBtn.addEventListener('click', () => {
        let targetElm = $('#' + STOPWATCH_ID_PREFIX + numWork);
        numWork++;
        // stopwatchをを複製。
        let cloneElm = targetElm.clone();
        // 複製した要素を初期化。
        cloneElm.find('#work-name' + (numWork - 1)).val('');
        cloneElm.find('#work-hour' + (numWork - 1)).text('00');
        cloneElm.find('#work-min' + (numWork - 1)).text('00');
        cloneElm.find('#work-sec' + (numWork - 1)).text('00');
        cloneElm.find('#work-start-btn' + (numWork - 1)).text('作業開始');
        cloneElm.find('#work-start-btn' + (numWork - 1)).attr('class', 'btn btn-primary');

        // 複製した要素の子要素のIDを変更。
        cloneElm.find('#work-name' + (numWork - 1)).attr('id', 'work-name' + numWork);
        cloneElm.find('#work-hour' + (numWork - 1)).attr('id', 'work-hour' + numWork);
        cloneElm.find('#work-min' + (numWork - 1)).attr('id', 'work-min' + numWork);
        cloneElm.find('#work-sec' + (numWork - 1)).attr('id', 'work-sec' + numWork);
        cloneElm.find('#work-start-btn' + (numWork - 1)).attr('id', 'work-start-btn' + numWork);

        // 要素をstopwatchの末尾に追加。
        cloneElm.insertAfter(targetElm).attr('id', STOPWATCH_ID_PREFIX + numWork);

        let newStopwatch = new Stopwatch();
        // 追加した要素に対してクリック時にストップウォッチを起動する処理を行う。
        newStopwatch.startStopwatchAfterClicking(String(numWork));
      });
    }
  }

}