var emailInput = document.getElementById("login_mail");
var emailPass = document.getElementById("login_pass");
var loginBtn = document.getElementById("login_btn");
var loginError = document.querySelector(".loginBox_error");

loginBtn.addEventListener("click", function () {
  var enteredEmail = emailInput.value;
  var enteredPassword = emailPass.value;

  if (enteredEmail === "user@gmail.com" && enteredPassword === "123456") {

    loginError.style.display = "none";
    window.location.href = "./home.html";

  } else {

    loginError.style.display = "block";

  }
});
