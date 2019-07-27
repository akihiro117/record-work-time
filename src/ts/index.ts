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
    let numClicked = 0;
    let count = 0;
    let minCount = 0;
    let hourCount = 0;
    let timer: any;
    workStartBtn.addEventListener('click', () => {
      numClicked++;
      if (workStartBtn != null) {
        if (numClicked % 2 == 1) {
          workStartBtn.innerHTML = '一時停止';
          workStartBtn.classList.add('btn-danger');
          workStartBtn.classList.remove('btn-primary');
        } else {
          workStartBtn.innerHTML = '作業開始';
          workStartBtn.classList.remove('btn-danger');
          workStartBtn.classList.add('btn-primary');
        }

        let secElm = document.getElementById('work-sec');
        let minElm = document.getElementById('work-min');
        let hourElm = document.getElementById('work-hour');
        if (numClicked % 2 != 0) {
          timer = setInterval(() => {
            count++;
            if (secElm != null) {
              if (count == 60) {
                count = 0;
                minCount++;
                if (minCount == 60) {
                  minCount = 0;
                  hourCount++;
                }
                if (minElm != null) {
                  minElm.innerHTML = ('0' + String(minCount)).slice(-2);
                }
                if (hourElm != null) {
                  hourElm.innerHTML = ('0' + String(hourCount)).slice(-2);
                }
              }
              secElm.innerHTML = ('0' + String(count)).slice(-2);

            }
          }, 1000);
        } else {
          clearInterval(timer);
        }
      }
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