// Bootstrapのスタイルシート側の機能を読み込む
import 'bootstrap/dist/css/bootstrap.min.css';

// BootstrapのJavaScript側の機能を読み込む
import 'bootstrap';

import { sample } from './operate-time';

let workStartBtn = document.getElementById('work-name-btn');
if (workStartBtn != null) {
  workStartBtn.addEventListener('click', () => {
    alert("test");
  }, false);
}
