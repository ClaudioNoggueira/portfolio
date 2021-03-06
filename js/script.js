// MOBILE NAV BUTTON CLICK EVENT
const mobileButtonEl = document.querySelector(".mobile-nav-button");

mobileButtonEl.addEventListener("click", () => {
  const headerEl = document.querySelector("header");
  headerEl.classList.toggle("nav-open");
});

// SMOOTH SCROLLING ANIMATION
const links = document.querySelectorAll("a:link");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
      if (link.classList.contains("main-nav-link"))
        document.querySelector("header").classList.remove("nav-open");
    }
  });
});

// MY AGE
const myAgeEl = document.querySelector(".myAge");
myAgeEl.textContent = new Date().getFullYear() - 1999;

// COPYRIGHT YEAR
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

// STICKY NAVIGATION BAR
const heroSectionEl = document.querySelector(".hero-section");

const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    !entry.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(heroSectionEl);
