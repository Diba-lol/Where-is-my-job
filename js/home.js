const filterChips = document.querySelectorAll(".filter-chip");

filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {

        // Remove active from all chips
        filterChips.forEach((item) => {
            item.classList.remove("active");
        });

        // Add active to clicked chip
        chip.classList.add("active");

        // Automatically scroll clicked chip into view
        chip.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
        });
    });
});


const sliders = document.querySelectorAll('.job-cards-container');

sliders.forEach(slider => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
});