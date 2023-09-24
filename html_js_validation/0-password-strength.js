document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const passwordForm = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('password');
    const errorText = document.getElementById('error');

    // Function to validate the password
    function validatePassword(password) {
        // Define regular expressions for each criteria
        const minLengthRegex = /.{8,}/;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*]/;

        // Check each criteria
        if (!minLengthRegex.test(password)) {
            return 'Password must be at least 8 characters long.';
        }
        if (!uppercaseRegex.test(password)) {
            return 'Password must contain at least one uppercase letter.';
        }
        if (!lowercaseRegex.test(password)) {
            return 'Password must contain at least one lowercase letter.';
        }
        if (!digitRegex.test(password)) {
            return 'Password must contain at least one numeric digit.';
        }
        if (!specialCharRegex.test(password)) {
            return 'Password must contain at least one special character (!@#$%^&*).';
        }

        // If all criteria are met, return null (no error)
        return null;
    }

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent the form from submitting

        const password = passwordInput.value;
        const error = validatePassword(password);

        if (error) {
            // Display the error message
            errorText.textContent = error;
        } else {
            // Reset any previous error message
            errorText.textContent = '';

            // Allow form submission
            passwordForm.submit();
        }
    }

    // Attach the form submission event handler
    passwordForm.addEventListener('submit', handleSubmit);
});
