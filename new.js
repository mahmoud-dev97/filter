let btns = Array.from(document.querySelectorAll(".nav li"));
let sections = Array.from(document.querySelectorAll(".new"));
let all = document.querySelector(".all");

window.addEventListener("load", () => {
  sections.forEach((item) => {
    item.classList.add("active");
  });
});

all.addEventListener("click", () => {
  all.classList.add("active");
  sections.forEach((item) => {
    item.classList.add("active");
  });
  btns.forEach((item) => {
    item.classList.remove("active");
  });
});

btns.forEach((item) => {
  item.addEventListener("click", () => {
    btns.forEach((element) => {
      element.classList.remove("active");
      sections[btns.indexOf(element)].classList.remove("active");
    });
    item.classList.add("active");
    sections[btns.indexOf(item)].classList.add("active");
  });
  item.addEventListener("click", () => {
    all.classList.remove("active");
  });
});
