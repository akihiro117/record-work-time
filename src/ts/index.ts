import { Stopwatch } from './stopwatch';

// Bootstrapのスタイルシート側の機能を読み込む
import 'bootstrap/dist/css/bootstrap.min.css';

// BootstrapのJavaScript側の機能を読み込む
import 'bootstrap';


// Htmlを読み込んだ後に実行。
document.addEventListener('DOMContentLoaded', () => {
  let workNameElm = document.getElementById('work-name');
  if (workNameElm != null) {
    workNameElm.focus();
  }

  let stopwatch = new Stopwatch();
  // ストップウォッチ処理を行う。
  stopwatch.startTimerAfterClicking();

  addStopwatch(1);
}, false);


function addStopwatch(numStopwatch: number): void {
  const STOPWATCH_ID_PREFIX = 'stopwatch';
  // 作業追加ボタン。
  let addWorkBtn = document.getElementById('work-add-btn');
  if (addWorkBtn != null) {
    let numWork = 1;
    addWorkBtn.addEventListener('click', () => {

      // stopwatchをクローンする。
      let stopwatchElm = document.getElementById('stopwatch1');
      if (stopwatchElm != null) {
        let cloneStopwatch = stopwatchElm.cloneNode(true);
        let stopwatchesElm = document.getElementById('stopwatches');
        if (stopwatchesElm != null) {
          stopwatchesElm.appendChild(cloneStopwatch);
        }
      }
    });
  }

}
