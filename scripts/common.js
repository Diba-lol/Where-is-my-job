
    document.addEventListener("DOMContentLoaded", () => {
        const menuToggle = document.getElementById("menuToggle");
        const navbar = document.querySelector(".navbar");
        const icon = document.querySelector(".menu-icon");
        const navLinks = document.querySelector(".nav-links");
        const navAccount = document.querySelector(".nav-account");

        if (!menuToggle || !navbar || !icon || !navLinks) {
            return;
        }

        menuToggle.addEventListener("click", (e) => {
            navbar.classList.toggle("active");
            
            if (navbar.classList.contains("active")) {
                icon.innerHTML = "&#10006;"; 
            } else {
                icon.innerHTML = "&#9776;"; 
            }
            e.stopPropagation(); 
        });

        document.addEventListener("click", (e) => {
            
            if (navbar.classList.contains("active") && 
                !navLinks.contains(e.target) && 
                (!navAccount || !navAccount.contains(e.target)) &&
                !menuToggle.contains(e.target)) {
                
                navbar.classList.remove("active");
                icon.innerHTML = "&#9776;";
            }
        });
    });

