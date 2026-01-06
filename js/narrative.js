document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach((el) => {
    const c = bootstrap.Carousel.getOrCreateInstance(el, {
      interval: 3500,
      ride: "carousel",
      pause: false,
      touch: true,
      wrap: true
    });

    // ✅ 只在 overlay 区域 hover 才 pause，避免“我只是想点箭头，它怎么停了”
    el.addEventListener("mouseenter", (e) => {
      if (e.target.closest(".item-link-overlay")) c.pause();
    });
    el.addEventListener("mouseleave", () => c.cycle());
  });
});
