const shareBtnElement = document.getElementById("open");
const shareBtnElementClose = document.getElementById("close");
const shareOverlayElement = document.querySelector(".social-overlay");
const overlaySpan = document.querySelector(".overlay-sp");
const overlayIcons = document.querySelector(".social-icons");
const tooltip = document.documentElement;

const overlayShow = function () {
  shareOverlayElement.style.height = "100%";
  overlaySpan.style.visibility = "visible";
  overlayIcons.style.visibility = "visible";
  shareBtnElementClose.style.visibility = "visible";
  tooltip.style.setProperty("--tooltip-vis", "visible");
};

const overlayHide = function () {
  shareOverlayElement.style.height = "0%";
  overlaySpan.style.visibility = "hidden";
  overlayIcons.style.visibility = "hidden";
  shareBtnElementClose.style.visibility = "hidden";
  tooltip.style.setProperty("--tooltip-vis", "hidden");
  shareOverlayElement.classList.remove("active");
};

const desktopToggle = function () {
  shareOverlayElement.classList.toggle("active");

  if (shareOverlayElement.classList.contains("active")) {
    shareOverlayElement.style.visibility = "visible";
    overlaySpan.style.visibility = "visible";
    overlayIcons.style.visibility = "visible";
    tooltip.style.setProperty("--tooltip-vis", "visible");
  } else {
    shareOverlayElement.style.visibility = "hidden";
    overlaySpan.style.visibility = "hidden";
    overlayIcons.style.visibility = "hidden";
    tooltip.style.setProperty("--tooltip-vis", "hidden");
  }
};

shareBtnElement.addEventListener("click", overlayShow);
shareBtnElementClose.addEventListener("click", overlayHide);
shareBtnElement.addEventListener("click", desktopToggle);
