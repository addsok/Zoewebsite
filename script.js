
// Scroll-reveal animation
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

// Very subtle parallax for background orbs
const orb1 = document.querySelector(".orb-1");
const orb2 = document.querySelector(".orb-2");
const orb3 = document.querySelector(".orb-3");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (orb1) orb1.style.transform = `translateY(${scrollY * 0.04}px)`;
  if (orb2) orb2.style.transform = `translateY(${scrollY * -0.03}px)`;
  if (orb3) orb3.style.transform = `translateX(-50%) translateY(${scrollY * 0.03}px)`;
});