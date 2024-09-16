// BRUSH ANIMATION

let design_container = document.getElementById("design-container");
let stroke = document.getElementById("stroke");
let brush = document.getElementById("brush");

// FRONT-END ICON ANIMATION

let front_end_container = document.getElementById("front-end-container");
let left_arrow = document.getElementById("left-arrow");
let bar = document.getElementById("bar");
let right_arrow = document.getElementById("right-arrow");

// GEAR ANIMATION

let back_end_container = document.getElementById("back-end-container");
let gear_1 = document.getElementById("gear-1");
let gear_2 = document.getElementById("gear-2");

// FULL STACK ICON ANIMATION

let full_stack_container = document.getElementById("full-stack-container");
let rectangle_1 = document.getElementById("rectangle-1");
let rectangle_2 = document.getElementById("rectangle-2");
let rectangle_3 = document.getElementById("rectangle-3");

// BRUSH ANIMATION

design_container.addEventListener("mouseover", function () {
  stroke.classList.add("stroke");
  brush.classList.remove("text-7xl");
  brush.classList.add("text-[0]");
});

design_container.addEventListener("mouseleave", function () {
  stroke.classList.remove("stroke");
  brush.classList.add("text-7xl");
  brush.classList.remove("text-[0]");
});

// FRONT-END ICON ANIMATION

front_end_container.addEventListener("mouseover", function () {
  left_arrow.classList.add("left-arrow");
  bar.classList.add("bar");
  right_arrow.classList.add("right-arrow");
});

front_end_container.addEventListener("mouseleave", function () {
  left_arrow.classList.remove("left-arrow");
  bar.classList.remove("bar");
  right_arrow.classList.remove("right-arrow");
});

// GEAR ANIMATION

back_end_container.addEventListener("mouseover", function () {
  gear_1.classList.add("gear-1");
  gear_2.classList.add("gear-2");
});

back_end_container.addEventListener("mouseleave", function () {
  gear_1.classList.remove("gear-1");
  gear_2.classList.remove("gear-2");
});

// FULL STACK ICON ANIMATION

full_stack_container.addEventListener("mouseover", function () {
  rectangle_1.classList.add("full-stack-icon-1");
  rectangle_2.classList.add("full-stack-icon-2");
  rectangle_3.classList.add("full-stack-icon-3");
});

full_stack_container.addEventListener("mouseleave", function () {
  rectangle_1.classList.remove("full-stack-icon-1");
  rectangle_2.classList.remove("full-stack-icon-2");
  rectangle_3.classList.remove("full-stack-icon-3");
});

// SCROLL SECTIONS ACTIVE LINK

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("text-main");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("text-main");
      });
    }
  });
};

// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// SCROLL REVEAL

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
})

ScrollReveal().reveal('.text-about-me, .h2', {origin: 'top'});

ScrollReveal().reveal('.container, .project-list-container, #about img, #home img, #contact form', {origin: 'bottom'});

