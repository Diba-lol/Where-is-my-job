document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".application-form-card");
  var resumeInput = document.getElementById("resume");
  var fileNameDisplay = document.getElementById("file-name");

  if (resumeInput && fileNameDisplay) {
    resumeInput.addEventListener("change", function () {
      if (this.files && this.files.length > 0) {
        fileNameDisplay.textContent = this.files[0].name;
      } else {
        fileNameDisplay.textContent = "Upload your resume";
      }
    });
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.reset();
      if (fileNameDisplay) {
        fileNameDisplay.textContent = "Upload your resume";
      }
    });
  }
});
