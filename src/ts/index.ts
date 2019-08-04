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

  addStopwatch();
}, false);

function addStopwatch(): void {
  const STOPWATCH_ID_PREFIX = 'stopwatch';
  // 作業追加ボタン。
  let addWorkBtn = document.getElementById('work-add-btn');
  if (addWorkBtn != null) {
    // 現在表示されている作業の数。
    let numWork = 1;
    addWorkBtn.addEventListener('click', () => {

      // stopwatchをクローンする。
      let stopwatchElm = document.getElementById('stopwatch1');
      if (stopwatchElm != null) {
        // stopwatchのクローンを生成。
        let cloneStopwatch = stopwatchElm.cloneNode(true);

        // cloneして生成した要素のvalueを初期化。
        let cloneChildList = cloneStopwatch.childNodes[1];

        let stopwatchesElm = document.getElementById('stopwatches');
        if (stopwatchesElm != null) {
          stopwatchesElm.appendChild(cloneStopwatch);
        }
      }
    });
  }

}
