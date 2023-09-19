// create a function that will be displayed on the browser using javaScript
function welcome(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    function displayFullName() {
      alert("welcome " + fullName + "!");
    }
  
    displayFullName();
  }