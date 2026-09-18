document.addEventListener("DOMContentLoaded", function () {
  // Get the important elements from the courses page.
  const searchInput = document.getElementById("courseSearch");
  const clearButton = document.getElementById("clearFilters");
  const resultCount = document.getElementById("resultsCount");
  const emptyState = document.getElementById("emptyState");
  const cards = [...document.querySelectorAll(".course-card")];
  const checkboxes = [
    ...document.querySelectorAll('.filter-panel input[type="checkbox"]'),
  ];

  // Return the values of all checked checkboxes in one filter group.
  function getSelectedValues(filterName) {
    return checkboxes
      .filter(
        function (checkbox) {
          return checkbox.name === filterName && checkbox.checked;
        }
      )
      .map(function (checkbox) {
        return checkbox.value;
      });
  }

  // Show only the course cards that match the current filters.
  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    const selectedCategories = getSelectedValues("category");
    const selectedLevels = getSelectedValues("level");
    let visibleCount = 0;

    cards.forEach(function (card) {
      // Search inside the keywords stored in the card's data-search attribute.
      const matchesSearch = !query || card.dataset.search.includes(query);
      const matchesCategory =
        !selectedCategories.length ||
        selectedCategories.includes(card.dataset.category);
      const matchesLevel =
        !selectedLevels.length || selectedLevels.includes(card.dataset.level);

      // A card is visible only when it passes every active filter.
      const isVisible = matchesSearch && matchesCategory && matchesLevel;
      card.hidden = !isVisible;

      if (isVisible) visibleCount += 1;
    });

    // Update the text above the cards.
    resultCount.textContent =
      query || selectedCategories.length || selectedLevels.length
        ? `${visibleCount} course${visibleCount === 1 ? "" : "s"} found`
        : "Showing all courses";

    // Display a message when no course matches the filters.
    emptyState.hidden = visibleCount !== 0;
  }

  // Apply the filters while the user types or checks a box.
  searchInput.addEventListener("input", applyFilters);
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", applyFilters);
  });

  // Remove all filters when the CLEAR button is clicked.
  clearButton.addEventListener("click", function () {
    searchInput.value = "";

    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });

    applyFilters();
    searchInput.focus();
  });
});
