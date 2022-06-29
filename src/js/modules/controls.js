const videoEl = document.querySelector("#video");
const controlsEl = document.querySelector(".video__controls");
const iconEl = controlsEl.querySelector("use");
controlsEl.addEventListener("click", controlsHandler);

function controlsHandler(e) {
  controlsEl.classList.toggle("play");
  if (videoEl.dataset.play === "true") {
    videoEl.pause();
    videoEl.dataset.play = "false";
  } else {
    videoEl.play();
    videoEl.dataset.play = "true";
  }
}
