// FILTER SECTION

document.addEventListener("DOMContentLoaded", () => {

    const filterChips = document.querySelectorAll(".filter-chip");
    const jobCards = document.querySelectorAll(".job-card");

    if (filterChips.length > 0) {
        filterChips.forEach(chip => {
            chip.addEventListener("click", () => {

                // 1. UPDATE STYLING (Color Change)

                filterChips.forEach(item => item.classList.remove("active"));
                chip.classList.add("active");

                // 2. SCROLL ANIMATION (Your custom code)

                chip.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest"
                });

                // 3. FILTER JOB CARDS

                if (jobCards.length > 0) {
                    const filterValue = chip.getAttribute("data-filter");

                    jobCards.forEach(card => {
                        const cardCategory = card.getAttribute("data-category") || "";

                        if (filterValue === "all" || cardCategory.split(" ").includes(filterValue)) {
                            card.style.display = ""; // Show card
                        } else {
                            card.style.display = "none"; // Hide card
                        }
                    });
                }

            });
        });
    }
});

// JOB CONTAINER SECTION

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

// COURSES CARD SILDER ARROW

document.addEventListener("DOMContentLoaded", () => {

    const leftBtn = document.getElementById("courseSlideLeft");
    const rightBtn = document.getElementById("courseSlideRight");

    const courseContainer = document.querySelector(".courses-section .job-cards-container");

    if (leftBtn && rightBtn && courseContainer) {

        leftBtn.addEventListener("click", () => {
            courseContainer.scrollBy({ left: -400, behavior: 'smooth' });
        });


        rightBtn.addEventListener("click", () => {
            courseContainer.scrollBy({ left: 400, behavior: 'smooth' });
        });
    }
});

