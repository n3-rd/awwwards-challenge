import gsap from "gsap";

const tl = gsap.timeline();

tl.from(".img, .heading, .menu, h1, p, .bottom-section", {
  duration: 1,
  y: 200,
  opacity: 0,
  stagger: {
    amount: 0.5,
  },
});
