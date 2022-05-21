// MOBILE NAV BUTTON CLICK EVENT
let mobileButtonEl = document.querySelector(".mobile-nav-button");

mobileButtonEl.addEventListener("click", () => {
  let headerEl = document.querySelector("header");
  headerEl.classList.toggle("nav-open");
});

// SMOOTH SCROLLING ANIMATION
let links = document.querySelectorAll("a:link");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    let href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      let sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
      if (link.classList.contains("main-nav-link"))
        document.querySelector("header").classList.remove("nav-open");
    }
  });
});
