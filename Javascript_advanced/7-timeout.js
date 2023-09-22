// create commands using the for loop
// start the execution
console.log("Start of the execution queue");

//execution with a function using setTimeOut
setTimeout(function () {
  console.log(
    "Final code block to be executed using setTimeout (with delay of 0)"
  );
}, 0);

// using for loop to iterate
for (var i = 1; i <= 100; i++) {
  console.log(i);
}

console.log("End of the loop printing");