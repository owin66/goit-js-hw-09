const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};
let colorSwitcher = '';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.start.addEventListener('click', handleStart);
refs.stop.addEventListener('click', handleStop);

function handleStart(e) {
  refs.start.setAttribute('disabled', true);
  refs.stop.removeAttribute('disabled');

  colorSwitcher = setInterval(() => {
    console.log(refs.body.style.backgroundColor);
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function handleStop(e) {
  clearInterval(colorSwitcher);
  refs.stop.setAttribute('disabled', true);
  refs.start.removeAttribute('disabled');
}
