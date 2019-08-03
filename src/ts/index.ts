import { OperateTimes } from './operate-time';
// Bootstrapのスタイルシート側の機能を読み込む
import 'bootstrap/dist/css/bootstrap.min.css';

// BootstrapのJavaScript側の機能を読み込む
import 'bootstrap';


// Htmlを読み込んだ後に実行。
document.addEventListener('DOMContentLoaded', () => {
  let timer = new OperateTimes();
  // タイマー処理を行う。
  timer.startTimerAfterClicking();
}, false);

