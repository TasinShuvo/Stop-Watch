let clearId;
let milisec = 0;
let min = 0;
let sec = 0;

document.querySelector('.js-start-btn')
  .addEventListener('click', () => { stopWatch() });

  document.querySelector('.js-pause-btn')
    .addEventListener('click', () => {
      clearInterval(clearId);
    });

    document.querySelector('.js-reset-btn')
    .addEventListener('click', () => {
      clearInterval(clearId);
      milisec = 0;
      sec = 0;
      min = 0;
      document.querySelector('.js-milisec-count')
        .innerHTML = milisec.toString().padStart(3, 0);
      document.querySelector('.js-sec-count')
        .innerHTML = sec.toString().padStart(2, 0);
      document.querySelector('.js-min-count')
        .innerHTML = min.toString().padStart(2, 0);
    });

    function stopWatch() {
      clearId = setInterval(() => {
        milisec++;
        document.querySelector('.js-milisec-count')
          .innerHTML = milisec.toString().padStart(3, 0);
  
        if (milisec >= 145) {
          sec++;
          milisec = 0;
        }
  
        document.querySelector('.js-sec-count')
          .innerHTML = sec.toString().padStart(2, 0);
        if (sec >= 60) {
          min++;
          sec = 0;
        }
  
        document.querySelector('.js-min-count')
          .innerHTML = min.toString().padStart(2, 0);
      }, 1);
    }

    const changeIcon = document.querySelector('.js-change');

    changeIcon.onclick = function () {
      document.body.classList.toggle('dark-them');
      document.querySelector('.js-them').classList.add('them');
      if (document.body.classList.contains('dark-them')) {
        changeIcon.src = 'sun.png';
      } else {
        changeIcon.src = 'moon.png';
        document.querySelector('.js-them').classList.remove('them');
      }
    };