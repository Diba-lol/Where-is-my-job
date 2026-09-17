// Get the registration form and all of its fields.
var registerForm = document.querySelector(".reg-form");
var nameInput = document.getElementById("register_name");
var emailInput = document.getElementById("register_email");
var passwordInput = document.getElementById("register_password");
var mobileInput = document.getElementById("register_mobile");
var termsInput = document.getElementById("register_terms");

// Run this code when the user clicks "Register now".
registerForm.addEventListener("submit", function (event) {
	// Stop the browser from refreshing the page.
	event.preventDefault();

	// Read the values and remove extra spaces from the beginning and end.
	var name = nameInput.value.trim();
	var email = emailInput.value.trim().toLowerCase();
	var password = passwordInput.value;
	var mobileNumber = mobileInput.value.trim();

	// These simple patterns check the basic shape of each value.
	var namePattern = /^[a-zA-Z ]{2,50}$/;
	var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	var mobilePattern = /^\+?[0-9]{10,15}$/;

	if (!namePattern.test(name)) {
		alert("Please enter a valid name.");
		return;
	}

	if (!emailPattern.test(email)) {
		alert("Please enter a valid email address.");
		return;
	}

	if (password.length < 6) {
		alert("Password must contain at least 6 characters.");
		return;
	}

	// Spaces and hyphens are allowed while typing a mobile number.
	var cleanedMobileNumber = mobileNumber.replace(/[\s-]/g, "");
	if (!mobilePattern.test(cleanedMobileNumber)) {
		alert("Please enter a valid mobile number.");
		return;
	}

	if (!termsInput.checked) {
		alert("Please agree to the Terms and Conditions.");
		return;
	}

	// Store the user's details as one object in the browser.
	// This is suitable for learning only, not for a real production login.
	var user = {
		name: name,
		email: email,
		password: password,
		mobileNumber: cleanedMobileNumber
	};

	// localStorage stores text, so JSON.stringify converts the object to text.
	localStorage.setItem("wmjUser", JSON.stringify(user));
	window.location.href = "../index.html";
});
