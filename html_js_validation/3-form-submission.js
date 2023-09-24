document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const submitForm = document.getElementById('submitForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Retrieve the values entered in the form fields
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        // Validate form fields
        if (name === '' || email === '') {
            // Display an error message if any required fields are empty
            displayErrorMessage('Please fill in all required fields.');
        } else if (!isValidEmail(email)) {
            // Display an error message if the email format is invalid
            displayErrorMessage('Please enter a valid email address.');
        } else {
            // If all validations pass, display a success message
            displaySuccessMessage('Form submitted successfully!');
        }
    }

    // Function to display an error message
    function displayErrorMessage(message) {
        const errorElement = document.createElement('p');
        errorElement.style.color = 'red';
        errorElement.textContent = message;
        submitForm.appendChild(errorElement);
    }

    // Function to display a success message
    function displaySuccessMessage(message) {
        const successElement = document.createElement('p');
        successElement.style.color = 'green';
        successElement.textContent = message;
        submitForm.appendChild(successElement);
    }

    // Function to validate email format using a regular expression
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    // Attach an event listener to the form for form submission
    submitForm.addEventListener('submit', handleFormSubmit);
});
