const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".pic");
const bottom = document.querySelector(".bottom-section");

let slideNumber = 1;

const length = images.length;

for (i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "btn-circle";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".btn-circle");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 800}px)`;
    slideNumber = i + 1;
    button.style.backgroundColor = "white";
  });
});

const nextSlide = () => {
  slider.style.transform = `translateX(-${800 * slideNumber}px)`;
  slideNumber++;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(-0px)`;
  slideNumber = 1;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${800 * (length - 1)}px)`;
  slideNumber = length;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${800 * (slideNumber - 2)}px)`;
  slideNumber--;
};

const changeColor = () => {
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "white";
};

right.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : getFirstSlide();
  changeColor();
});

left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
  changeColor();
});
