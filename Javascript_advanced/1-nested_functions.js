/*
Create a variable outside the function.
create nested functions
will be using closures 
*/

let globalVariable = "welcome";

function outer() {
  alert(globalVariable);
  let course = "Holberton";
  inner();
  function inner() {
    alert(globalVariable + " " + course);
    let exclamation = "!";
    inception();
    function inception() {
      alert(globalVariable + " " + course + exclamation);
    }
  }
}
outer();