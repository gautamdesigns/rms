const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
registerBtn.addEventListener("click", () => {
	container.classList.add("active");
});
loginBtn.addEventListener("click", () => {
	container.classList.remove("active");
});
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
registerForm.addEventListener("submit", function (event) {
	event.preventDefault();
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const phone = document.getElementById("phone").value;
	const password = document.getElementById("password").value;
	const address = document.getElementById("address").value;
	if (!/^[a-zA-Z\s]*$/.test(name)) {
		alert("Please enter a valid name.");
		return;
	}
	if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		alert("Please enter a valid email address.");
		return;
	}
	if (!/^\d{10}$/.test(phone)) {
		alert("Please enter a 10-digit phone number.");
		return;
	}
	if (password.length < 6) {
		alert("Password must be at least 6 characters long.");
		return;
	}
	if (!address.trim()) {
		alert("Please enter your address.");
		return;
	}
	alert("Form submitted successfully!");
});
loginForm.addEventListener("submit", function (event) {
	event.preventDefault();
	const emailPhone = document.getElementById("login-email-phone").value;
	const password = document.getElementById("login-password").value;
	if (!emailPhone.trim()) {
		alert("Please enter your email or phone number.");
		return;
	}
	if (password.length < 6) {
		alert("Please enter a valid password.");
		return;
	}
	alert("Form submitted successfully!");
});
