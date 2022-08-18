const btn = document.querySelector(".btn");

  btn.addEventListener("click", () => {
    gsap.to(".btn", 1, {
      opacity: 0,
      y: -40,
      ease: Expo.easeInOut,
  });

  gsap.to(".text-wrapper > div", 1, {
    x: "500",
    ease: Expo.easeInOut,
    delay: 2,
    stagger: 0.1,
  });

  gsap.to(".text-wrapper", 3, {
    y: -600,
    scale: 4.5,
    rotate: -90,
    ease: Expo.easeInOut,
    delay: 1.5,
  });

  gsap.to(".text", 1, {
    opacity: 1,
    ease: Expo.easeInOut,
    delay: 3,
  });

  gsap.to(".text-wrapper > div", 4, {
    x: "-3500",
    ease: Expo.easeInOut,
    delay: 3.5,
    stagger: 0.05,
  });

  gsap.to(".text-container", 2, {
    bottom: "-100%",
    ease: Expo.easeInOut,
    delay: 6,
  });

  let textWrapper = document.querySelector(".header");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline().add({
    targets: ".header .letter",
    opacity: [0, 1],
    translateY: [200, 0],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 7000 + 40 * i,
  });
});