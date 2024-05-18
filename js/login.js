function toggleContainerActive(buttonId) {
  const container = document.getElementById("container");
  const btn = document.getElementById(buttonId);
  btn.addEventListener("click", () => {
    container.classList.toggle("active");
  });
}
toggleContainerActive("register");
toggleContainerActive("login");
function checkAllFieldsFilled(formId) {
  const form = document.getElementById(formId);
  const inputs = Array.from(document.querySelectorAll(`#${formId} input`));
  for (let input of inputs) {
    if (!input.value.trim()) {
      alert("Fill all details.");
      return false;
    }
  }
  return true;
}
function validatePhoneNumberAndPasswordLength(formId) {
  const form = document.getElementById(formId);
  const inputs = Array.from(document.querySelectorAll(`#${formId} input`));
  for (let input of inputs) {
    if (input.id === "phone" &&!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(input.value)) {
      alert("Please enter a 10-digit phone number.");
      return false;
    } else if (input.id === "password" && input.value.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
  }
  return true;
}
function submitRegistrationForm(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  if (checkAllFieldsFilled("register-form") && validatePhoneNumberAndPasswordLength("register-form")) {
    alert("Form submitted successfully!");
  }
}
function submitLoginForm(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  if (checkAllFieldsFilled("login-form") && validatePhoneNumberAndPasswordLength("login-form")) {
    alert("Form submitted successfully!");
  }
}
document.querySelector('#register-form').addEventListener('submit', submitRegistrationForm);
document.querySelector('#login-form').addEventListener('submit', submitLoginForm);
document.addEventListener("DOMContentLoaded", function () {
  const passwordFields = document.querySelectorAll("#password");
  const togglePasswordIcons = document.querySelectorAll("#toggle-password");
  passwordFields.forEach((passwordField, index) => {
    const togglePasswordIcon = togglePasswordIcons[index];
    const toggleVisibility = () => {
      passwordField.type = passwordField.type === "password"? "text" : "password";
      togglePasswordIcon.textContent = passwordField.type === "password"? "visibility_off" : "visibility";
    };
    togglePasswordIcon.addEventListener("click", toggleVisibility);
    togglePasswordIcon.addEventListener("touchstart", toggleVisibility);
  });
});
