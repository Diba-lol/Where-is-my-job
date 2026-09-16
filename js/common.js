document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");
    const navActions = document.querySelector(".nav-actions");
    const menuIcon = document.querySelector(".menu-icon");

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");
        navActions.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuIcon.textContent = "✕";
        } else {
            menuIcon.textContent = "☰";
        }

    });

});
