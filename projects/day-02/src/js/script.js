import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, Draggable);

const navLinks = gsap.utils.toArray("[data-link]");
const lastItemWidth = () => navLinks[navLinks.length - 1].offsetWidth;

const track = document.querySelector("[data-draggable]");
const tl = gsap.timeline().to(track, {
  x: () => {
    return (track.offsetWidth * 0.5 - lastItemWidth()) * -1;
  },
  ease: "none",
});

const st = ScrollTrigger.create({
  animation: tl,
  scrub: 0,
});
