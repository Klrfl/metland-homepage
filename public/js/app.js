const openNav = document.getElementById("open-nav");
const closeNav = document.getElementById("close-nav");
const mainNav = document.getElementById("main-nav");

mainNav.addEventListener("click", () => {
  mainNav.classList.remove("active");
});

openNav.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});
