document.addEventListener("DOMContentLoaded", () => {

  const urlParams = new URLSearchParams(window.location.search);
  const selectedJobId = urlParams.get('job');


  if (selectedJobId) {

    const jobCard = document.getElementById(selectedJobId);


    if (jobCard) {
      jobCard.style.display = 'flex';
    } else {
      console.error("Job card not found for ID: " + selectedJobId);
    }
  }
});
