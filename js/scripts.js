
// Get references to form and form elements
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("submitButton");

// Add an event listener to the form for form submission
contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Perform validation for each field
    let isValid = true;

    if (nameInput.value.trim() === "") {
        isValid = false;
        displayError(nameInput, "name:required");
    } else {
        clearError(nameInput, "name:required");
    }

    if (emailInput.value.trim() === "") {
        isValid = false;
        displayError(emailInput, "email:required");
    } else if (!isValidEmail(emailInput.value.trim())) {
        isValid = false;
        displayError(emailInput, "email:email");
    } else {
        clearError(emailInput, "email:required");
        clearError(emailInput, "email:email");
    }
/*
    if (phoneInput.value.trim() === "") {
        isValid = false;
        displayError(phoneInput, "phone:required");
    } 
    else {
        clearError(phoneInput, "phone:required");
    }
*/
if (phoneInput.value.trim() === "") {
    isValid = false;
    displayError(phoneInput, "phone:required");
} else if (!isValidPhoneNumber(phoneInput.value.trim())) {
    isValid = false;
    displayError(phoneInput, "phone:invalid");
} else {
    clearError(phoneInput, "phone:required");
    clearError(phoneInput, "phone:invalid");
}


    if (messageInput.value.trim() === "") {
        isValid = false;
        displayError(messageInput, "message:required");
    } else {
        clearError(messageInput, "message:required");
    }

    // If the form is valid, you can submit it
    if (isValid) {
        // Here, you can submit the form to the server or take any other action
        // For example, you can display a success message or redirect the user.
        // In this example, let's just log a success message to the console.
        console.log("Form submission successful!");
    }
});

// Function to display an error message for a specific input field
function displayError(inputElement, errorType) {
    const errorFeedback = document.querySelector(`[data-sb-feedback="${errorType}"]`);
    if (errorFeedback) {
        inputElement.classList.add("is-invalid");
        errorFeedback.style.display = "block";
    }
}

// Function to clear an error message for a specific input field
function clearError(inputElement, errorType) {
    const errorFeedback = document.querySelector(`[data-sb-feedback="${errorType}"]`);
    if (errorFeedback) {
        inputElement.classList.remove("is-invalid");
        errorFeedback.style.display = "none";
    }
}

// Function to validate an email using a regular expression
function isValidEmail(email) {
    const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailPattern.test(email);
}


// Function to validate a phone number
function isValidPhoneNumber(phone) {
    // Assuming a valid phone number has exactly 10 digits and contains only digits
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}