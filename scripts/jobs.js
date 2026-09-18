document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("jobSearch");
  const allFilters = document.querySelectorAll(".jobs-sidebar input");
  const jobCards = document.querySelectorAll(".job-card-exact-dark");

  let lastClickedRadio = null;

  allFilters.forEach(radio => {
    radio.addEventListener("click", (e) => {
      if (lastClickedRadio === radio) {
        radio.checked = false;
        lastClickedRadio = null;
        filterJobs();
      } else {
        lastClickedRadio = radio;
      }
    });
  });

  function filterJobs() {
    const searchText = searchInput ? searchInput.value.toLowerCase().trim() : "";

    const filterGroups = document.querySelectorAll(".jobs-sidebar .filter-group");

    const checkedCategory = filterGroups[1] ? filterGroups[1].querySelector('input[type="radio"]:checked') : null;
    const categoryValue = checkedCategory ? checkedCategory.value.toLowerCase() : "";

    const checkedJobType = filterGroups[2] ? filterGroups[2].querySelector('input[type="radio"]:checked') : null;
    const jobTypeValue = checkedJobType ? checkedJobType.nextElementSibling.innerText.toLowerCase() : "";

    const checkedExp = filterGroups[3] ? filterGroups[3].querySelector('input[type="radio"]:checked') : null;
    const expValue = checkedExp ? checkedExp.nextElementSibling.innerText.toLowerCase() : "";

    jobCards.forEach(card => {
      const cardText = card.innerText.toLowerCase();
      const cardCategory = card.getAttribute("data-category") ? card.getAttribute("data-category").toLowerCase() : "";

      const matchesSearch = cardText.includes(searchText);
      let matchesCategory = !categoryValue || cardCategory.includes(categoryValue);
      let matchesJobType = !jobTypeValue || cardText.includes(jobTypeValue);
      let matchesExp = !expValue || cardText.includes(expValue);

      if (matchesSearch && matchesCategory && matchesJobType && matchesExp) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", filterJobs);
  }

  allFilters.forEach(input => {
    input.addEventListener("change", filterJobs);
  });
});