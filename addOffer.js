document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const title = document.getElementById("title");
    const destination = document.getElementById("destination");
    const departureDate = document.getElementById("departure-date");
    const returnDate = document.getElementById("return-date");
    const price = document.getElementById("price");

    // Function to show error messages inline
    function showError(input, message) {
        let error = input.nextElementSibling;
        if (!error || !error.classList.contains("error-message")) {
            error = document.createElement("div");
            error.className = "error-message";
            error.style.color = "red";
            input.parentNode.insertBefore(error, input.nextSibling);
        }
        error.textContent = message;
    }

    // Function to show success messages
    function showSuccess(input) {
        let success = input.nextElementSibling;
        if (!success || !success.classList.contains("success-message")) {
            success = document.createElement("div");
            success.className = "success-message";
            success.style.color = "green";
            input.parentNode.insertBefore(success, input.nextSibling);
        }
        success.textContent = "Correct";
    }

    // Function to remove messages
    function clearMessages(input) {
        let message = input.nextElementSibling;
        if (message) message.remove();
    }

    // Function to validate form
    function validateForm(event) {
        event.preventDefault();
        let valid = true;

        // Title validation
        if (title.value.trim().length < 3) {
            showError(title, "The title must contain at least 3 characters.");
            valid = false;
        } else {
            showSuccess(title);
        }

        // Destination validation (letters and spaces only, at least 3 characters)
        if (!/^[a-zA-Z\s]{3,}$/.test(destination.value.trim())) {
            showError(destination, "The destination must contain only letters and at least 3 characters.");
            valid = false;
        } else {
            showSuccess(destination);
        }

        // Date validation
        if (departureDate.value === "") {
            showError(departureDate, "Please select a valid departure date.");
            valid = false;
        } else {
            showSuccess(departureDate);
        }

        if (returnDate.value === "" || returnDate.value <= departureDate.value) {
            showError(returnDate, "Return date must be after the departure date.");
            valid = false;
        } else {
            showSuccess(returnDate);
        }

        // Price validation
        if (price.value === "" || parseFloat(price.value) <= 0) {
            showError(price, "The price must be a positive number.");
            valid = false;
        } else {
            showSuccess(price);
        }

        if (valid) {
            alert("Form submitted successfully!");
            form.submit();
        }
    }

    // Real-time validation using onkeyup
    function realTimeValidation(event) {
        let input = event.target;
        clearMessages(input);
        if (input === title && input.value.trim().length < 3) {
            showError(input, "The title must contain at least 3 characters.");
        } else if (input === destination && !/^[a-zA-Z\s]{3,}$/.test(input.value.trim())) {
            showError(input, "The destination must contain only letters and at least 3 characters.");
        } else if (input === price && (input.value === "" || parseFloat(input.value) <= 0)) {
            showError(input, "The price must be a positive number.");
        } else {
            showSuccess(input);
        }
    }

    // Add event listeners
    form.addEventListener("submit", validateForm);
    title.addEventListener("keyup", realTimeValidation);
    destination.addEventListener("keyup", realTimeValidation);
    price.addEventListener("keyup", realTimeValidation);
});
