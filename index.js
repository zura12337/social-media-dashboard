const darkMode = document.getElementById("darkMode");
const text = document.querySelector(".text");
const boxes = document.querySelectorAll(".box");
const midText = document.querySelector(".mid-text");
darkMode.addEventListener("click", () => {
  text.classList.toggle("text-dark");
  document.body.classList.toggle("body-dark");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].classList.toggle("box-dark");
  }
  midText.classList.toggle("dark-mid-text");
  gsap.from(".box", {
    opacity: 0,
    duration: 0.5,
    y: -50,
    stagger: 0.1,
  });
  gsap.from(".mid-text", {
    opacity: 0,
    duration: 1,
    y: -50,
  });
  gsap.from(".text", {
    opacity: 0,
    duration: 1,
    y: -50,
  });
});
gsap.from(".box", {
  opacity: 0,
  duration: 0.5,
  y: -50,
  stagger: 0.1,
});
gsap.from(".mid-text", {
  opacity: 0,
  duration: 1,
  y: -50,
});
gsap.from(".text", {
  opacity: 0,
  duration: 1,
  y: -50,
});
