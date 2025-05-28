  document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector(".scroll-image");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Run only once
        }
      });
    }, {
      threshold: 0.3 // Trigger when 30% of the image is visible
    });

    observer.observe(image);
  });