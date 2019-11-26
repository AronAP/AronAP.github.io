// typed.js
var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  contentType: 'html',
  typeSpeed: 60,
  startDelay: 1000,
  backSpeed: 20,
  backDelay: 700,
});

// SKIP
var btn = document.getElementById('skip-btn'),
  typedField = document.getElementsByClassName('cursor')[0],
  skipField = document.getElementById('skip');

function showSkipField() {
  typedField.style.display = 'none';
  skipField.style.display = 'block';
  btn.style.display = 'none';
}

btn.addEventListener('click', function () {
  showSkipField();
});

setTimeout(function () {
  btn.style.visibility = 'visible';
  btn.style.opacity = 100;
}, 20000);

setTimeout(function () {
  btn.style.visibility = 'hidden';
  btn.style.opacity = 0;
}, 72000);
