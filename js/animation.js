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



  // custom slider

  
  const slidesContainer = document.getElementById('slidesContainer');
  const totalSlides = slidesContainer.children.length;
  let currentIndex = 0;
  let autoSlideInterval;

  function showSlide(index) {
    const offset = -index * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  function moveEffect(e) {
    const content = e.currentTarget.querySelector('.slide-content');
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    content.style.transform = `rotateX(${-y / 25}deg) rotateY(${x / 25}deg)`;
  }

  function resetEffect(e) {
    const content = e.currentTarget.querySelector('.slide-content');
    content.style.transform = `rotateX(0deg) rotateY(0deg)`;
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 2000); // Every 2 seconds
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Start auto sliding
  startAutoSlide();

  // Optional: Pause on hover (if needed)
  document.querySelector('.slider').addEventListener('mouseenter', stopAutoSlide);
  document.querySelector('.slider').addEventListener('mouseleave', startAutoSlide);
