
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");
const header = document.querySelector("header");
const originalParent = navLinks.parentNode; // Spara ursprungliga placeringen

menuIcon.addEventListener("click", () => {
  if (!navLinks.classList.contains("active")) {
    document.body.insertBefore(navLinks, header); // Flytta ovanför header
  } else {
    originalParent.insertBefore(navLinks, header.nextSibling); // Flytta tillbaka under navbar
  }

  navLinks.classList.toggle("active");
});

