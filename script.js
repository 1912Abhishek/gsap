function logoanimation() {
  var tm = gsap.timeline();
  gsap.from("#section1 nav div span", {
    duration: 1,
    opacity: 0,
    x: 1000,
    stagger: 0.1,
    ease: "back.in",
  });
  gsap.from("#section1 nav div p", {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    y: -100,
    stagger: 0.3,
  });
  gsap.from("#section1 .contain p", {
    duration: 1,
    delay: 2,
    opacity: 0,
    y: 100,
    stagger: 0.3,
  });
  gsap.from("#section1 .contain button", {
    duration: 1,
    delay: 3,
    opacity: 0,
    rotate: 360,
    x: -10,
    ease:"back.in"
  });
  gsap.from("#section1 .boxes div", {
    duration: 1,
    delay: 3,
    opacity: 0,
    y: 110,
    ease:"elastic"
  });
}

logoanimation();
