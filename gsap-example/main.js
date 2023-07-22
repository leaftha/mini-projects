import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

window.addEventListener("load", function () {
  init();
});

function init() {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".main",
      start: "top top",
      end: "bottom bottom",
      // markers: true,
      pin: true,
      scrub: true,
    },
  });
  tl.to(".title", {
    fontSize: "64px",
  });
  // .to(".title", {
  //   flexDirection: "row",
  // })
  // .to(".title", {
  //   alignItems: "center",
  // });
}
