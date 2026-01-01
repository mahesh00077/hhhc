// Simple animation on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".service-card").forEach(card => {
    let position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200; // lower = faster

  const animateCounters = (entry) => {
    if (entry[0].isIntersecting) {
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;

          const increment = Math.ceil(target / speed);

          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
      observer.disconnect(); // Animate only once
    }
  };

  const observer = new IntersectionObserver(animateCounters, { threshold: 0.5 });
  observer.observe(document.querySelector(".stats-section"));
});
