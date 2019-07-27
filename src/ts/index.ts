// Bootstrapのスタイルシート側の機能を読み込む
import 'bootstrap/dist/css/bootstrap.min.css';

// BootstrapのJavaScript側の機能を読み込む
import 'bootstrap';

// Htmlを読み込んだ後に実行。
document.addEventListener('DOMContentLoaded', () => {
  startCount();
}, false);

function startCount(): void {
  let workStartBtn = document.getElementById('work-start-btn');
  if (workStartBtn != null) {
    workStartBtn.addEventListener('click', () => {
      if (workStartBtn != null) {
        workStartBtn.innerHTML = '停止';
        workStartBtn.classList.add('btn-danger');
        workStartBtn.classList.remove('btn-primary');
      }
      countSec();
    });
  }
};

function countSec(): void {
  let secElm = document.getElementById('work-sec');
  let count = 0;
  let timer = setInterval(() => {
    count++;
    if (secElm != null) {
      secElm.innerHTML = ('0' + String(count)).slice(-2);
    }
  }, 1000);
};