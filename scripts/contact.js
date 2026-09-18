document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents the page from refreshing on submit
  document.getElementById("statusMsg").classList.add("show"); // Shows the success message block
  this.reset(); // Clears the form fields
});
