const screen = document.getElementById('screen');
const picker = document.getElementById('picker');
const applyBtn = document.getElementById('apply-btn');

applyBtn.addEventListener('click', () => {
  screen.style.background = picker.value;
});

screen.addEventListener('dblclick', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});