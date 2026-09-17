// Get the login fields and the error message.
var emailInput = document.getElementById("login_mail");
var passwordInput = document.getElementById("login_pass");
var loginBtn = document.getElementById("login_btn");
var loginError = document.querySelector(".loginBox_error");

loginBtn.addEventListener("click", function () {
  // Read the values entered by the user.
  var enteredEmail = emailInput.value.trim().toLowerCase();
  var enteredPassword = passwordInput.value;

  // Get the registered user from localStorage.
  var savedUserText = localStorage.getItem("wmjUser");

  // Show an error if nobody has registered yet.
  if (!savedUserText) {
    loginError.style.display = "block";
    return;
  }

  // JSON.parse converts the saved text back into a JavaScript object.
  var savedUser = JSON.parse(savedUserText);

  // Check whether both login values match the registered user.
  if (enteredEmail === savedUser.email && enteredPassword === savedUser.password) {

    loginError.style.display = "none";
    window.location.href = "./pages/home.html";

  } else {

    loginError.style.display = "block";

  }
});

var emailInput = document.getElementById("login_mail");
var emailPass = document.getElementById("login_pass");
var loginBtn = document.getElementById("login_btn");
var loginError = document.querySelector(".loginBox_error");

loginBtn.addEventListener("click", function () {
  var enteredEmail = emailInput.value;
  var enteredPassword = emailPass.value;

  if (enteredEmail === "user@gmail.com" && enteredPassword === "123456") {

    loginError.style.display = "none";
    window.location.href = "./pages/home.html";

  } else {

    loginError.style.display = "block";

  }
});
