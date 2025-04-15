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

    reveal_glide.reveal(".reveal-hr", { origin: "left" });
    reveal_glide.reveal(".reveal-title", { delay: 50 });
    reveal_glide.reveal(".reveal-desc", { delay: 200 });
    reveal_glide.reveal(".reveal-buttons", { delay: 350 });
    reveal_glide.reveal(".reveal-trust", { delay: 400 });
    reveal_glide.reveal(".reveal-stat-1", { origin: "bottom", delay: 250 });
    reveal_glide.reveal(".reveal-stat-2", { origin: "bottom", delay: 320 });
    reveal_glide.reveal(".reveal-stat-3", { origin: "bottom", delay: 390 });

    const reveal_opacity = ScrollReveal({
      distance: "30px",
      duration: 600,
      reset: false,
    });
    reveal_opacity.reveal(".reveal-img1", { origin: "top", delay: 50 });
    reveal_opacity.reveal(".reveal-img2", { origin: "bottom", delay: 150 });
    reveal_opacity.reveal(".reveal-arrow", {
      origin: "right",
      delay: 150,
      dutation: 800,
      rotate: {
        z: 20,
      },
    });
    reveal_opacity.reveal(".reveal-grid", { origin: "top", delay: 200 });
  });
  return <></>;
};

export default ScrollRevealComponent;
