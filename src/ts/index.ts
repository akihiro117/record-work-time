// Bootstrapのスタイルシート側の機能を読み込む
import 'bootstrap/dist/css/bootstrap.min.css';

// BootstrapのJavaScript側の機能を読み込む
import 'bootstrap';

import { StopwatchMaker } from './stopwatch-maker';
import { Stopwatch } from './stopwatch';


// Htmlを読み込んだ後に実行。
document.addEventListener('DOMContentLoaded', () => {
  let workNameElm = document.getElementById('work-name');
  if (workNameElm != null) {
    workNameElm.focus();
  }

  let stopwatch = new Stopwatch();
  // ストップウォッチ処理を行う。
  stopwatch.startStopwatchAfterClicking('1');

  // 追加ボタンをクリックするとストップウォッチを追加する。
  let stopwatchMaker = new StopwatchMaker();
  stopwatchMaker.addStopwatch();
}, false);

