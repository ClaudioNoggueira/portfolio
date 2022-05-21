let mobileButtonEl = document.querySelector(".mobile-nav-button");

mobileButtonEl.addEventListener("click", () => {
  let headerEl = document.querySelector("header");
  headerEl.classList.toggle("nav-open");
});
