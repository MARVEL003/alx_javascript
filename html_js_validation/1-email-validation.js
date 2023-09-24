document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const errorText = document.getElementById('error');

    // Function to validate the email format
    function validateEmail(email) {
        // Define a regular expression pattern for a standard email format
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Check if the email matches the pattern
        if (!emailRegex.test(email)) {
            return false;
        }
        return true;
    }

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent the form from submitting

        const email = emailInput.value;
        const isValid = validateEmail(email);

        if (!isValid) {
            // Display the error message
            errorText.textContent = 'Please enter a valid email address.';
        } else {
            // Reset any previous error message
            errorText.textContent = '';

            // Allow form submission
            emailForm.submit();
        }
    }

    // Attach the form submission event handler
    emailForm.addEventListener('submit', handleSubmit);
});
