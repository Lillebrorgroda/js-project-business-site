const menuToggle = document.getElementById("last-image");
const navList = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});