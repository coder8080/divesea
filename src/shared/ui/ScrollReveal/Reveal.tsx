import { createRenderEffect } from "solid-js";
// @ts-ignore
import ScrollReveal from "scrollreveal";

const ScrollRevealComponent = () => {
  createRenderEffect(() => {
    const reveal_glide = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 700,
      delay: 0,
      reset: false,
    });
    // @ts-ignore
    reveal_glide.reveal(".reveal-hr", { origin: "left" });
    reveal_glide.reveal(".reveal-title");
    reveal_glide.reveal(".reveal-desc", { delay: 150 });
    reveal_glide.reveal(".reveal-buttons", { delay: 300 });
    reveal_glide.reveal(".reveal-stat-1", { origin: "bottom", delay: 250 });
    reveal_glide.reveal(".reveal-stat-2", { origin: "bottom", delay: 320 });
    reveal_glide.reveal(".reveal-stat-3", { origin: "bottom", delay: 390 });

    const reveal_opacity = ScrollReveal({ distance: "30px", duration: 600 });
    reveal_opacity.reveal(".reveal-img1", { origin: "top" });
    reveal_opacity.reveal(".reveal-img2", { origin: "bottom" });
    reveal_opacity.reveal(".reveal-arrow", { origin: "top", duration: 600 });
    reveal_opacity.reveal(".reveal-grid", { origin: "right" });
  });
  return <></>;
};

export default ScrollRevealComponent;
