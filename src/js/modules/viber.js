const viberLink = document.querySelector(".viber__link");
const actionEl = document.querySelector(".action__wrap");
const viberClose = document.querySelector(".viber_close");

viberClose.addEventListener("click", onCloseClick);

function moveViber() {
  const intervalId = setInterval(() => {
    viberLink.classList.toggle("viber__link_right");
  }, 500);
}
moveViber();

function actionOpen() {
  const timeoutId = setTimeout(() => {
    actionEl.classList.toggle("is-hidden");
    clearTimeout(timeoutId);
  }, 15000);
}

function onCloseClick() {
  actionEl.classList.toggle("is-hidden");
  actionOpen();
}

actionOpen();
