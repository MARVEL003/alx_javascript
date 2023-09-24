document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const dynamicForm = document.getElementById('dynamicForm');
    const numFieldsDropdown = document.getElementById('numFields');
    const inputContainer = document.getElementById('inputContainer');

    // Function to generate input fields dynamically
    function generateInputFields(numFields) {
        // Clear existing input fields
        inputContainer.innerHTML = '';

        // Create and append text input fields based on the selected value
        for (let i = 1; i <= numFields; i++) {
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.name = 'field' + i;
            inputField.placeholder = 'Field ' + i;
            inputContainer.appendChild(inputField);
        }
    }

    // Function to validate the form before submission
    function validateForm(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the selected value from the dropdown menu
        const numFields = parseInt(numFieldsDropdown.value);

        // Check if any of the input fields are empty
        for (let i = 1; i <= numFields; i++) {
            const fieldName = 'field' + i;
            const inputField = document.getElementsByName(fieldName)[0];
            if (!inputField.value) {
                alert('Please fill in all fields.');
                return; // Prevent form submission
            }
        }

        // If all fields are filled, allow form submission
        dynamicForm.submit();
    }

    // Attach an event listener to the dropdown menu for changes
    numFieldsDropdown.addEventListener('change', function () {
        const numFields = parseInt(numFieldsDropdown.value);
        generateInputFields(numFields);
    });

    // Attach an event listener to the form submission
    dynamicForm.addEventListener('submit', validateForm);
});
