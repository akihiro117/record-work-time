import { AddStopwatch } from './add-stopwatch';
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
  stopwatch.startTimerAfterClicking('1');

  // 追加ボタンをクリックするとストップウォッチを追加する。
  let addStopwatch = new AddStopwatch();
  addStopwatch.addStopwatch();
}, false);

