/**
 * ストップウォッチの追加に関するクラス。
 */

import $ from 'jquery';

export class AddStopwatch {

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
        cloneElm.find('#work-name').val('');
        cloneElm.find('#work-hour').text('00');
        cloneElm.find('#work-min').text('00');
        cloneElm.find('#work-sec').text('00');
        cloneElm.find('#work-start-btn').text('作業開始');
        cloneElm.find('#work-start-btn').attr('class', 'btn btn-primary');

        // 要素をstopwatchの末尾に追加。
        cloneElm.insertAfter(targetElm).attr('id', STOPWATCH_ID_PREFIX + numWork);
      });
    }
  }

}