document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate each field
    let isValid = validateName() & validateEmail() & validatePhone() & validatePassword() & validateConfirmPassword();

    if (isValid) {
        alert("Form Submitted Successfully!");
    }
});

// Validate Name
function validateName() {
    const name = document.getElementById("fullName").value;
    const errorElement = document.getElementById("nameError");

    if (name.length < 5) {
        errorElement.textContent = "Name must be at least 5 characters";
        return false;
    }

    errorElement.textContent = "";
    return true;
}

// Validate Email
function validateEmail() {
    const email = document.getElementById("email").value;
    const errorElement = document.getElementById("emailError");

    if (!email.includes("@")) {
        errorElement.textContent = "Enter a valid email address";
        return false;
    }

    errorElement.textContent = "";
    return true;
}

// Validate Phone
function validatePhone() {
    const phone = document.getElementById("phone").value;
    const errorElement = document.getElementById("phoneError");

    if (phone === "123456789" || !/^\d{10}$/.test(phone)) {
        errorElement.textContent = "Enter a valid 10-digit phone number";
        return false;
    }

    errorElement.textContent = "";
    return true;
}

// Validate Password
function validatePassword() {
    const password = document.getElementById("password").value;
    const name = document.getElementById("fullName").value;
    const errorElement = document.getElementById("passwordError");

    if (password.toLowerCase() === "password" || password === name || password.length < 8) {
        errorElement.textContent = "Password must be strong and at least 8 characters";
        return false;
    }

    errorElement.textContent = "";
    return true;
}

// Validate Confirm Password
function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorElement = document.getElementById("confirmPasswordError");

    if (password !== confirmPassword) {
        errorElement.textContent = "Passwords do not match";
        return false;
    }

    errorElement.textContent = "";
    return true;
}

// Real-time validation using onChange
document.getElementById("fullName").addEventListener("change", validateName);
document.getElementById("email").addEventListener("change", validateEmail);
document.getElementById("phone").addEventListener("change", validatePhone);
document.getElementById("password").addEventListener("change", validatePassword);
document.getElementById("confirmPassword").addEventListener("change", validateConfirmPassword);