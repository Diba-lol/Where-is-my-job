const resume = document.getElementById("resume");
const fileName = document.getElementById("file-name");

resume.addEventListener("change", function () {
    if (resume.files.length > 0) {
        fileName.textContent = resume.files[0].name;
    }
});
