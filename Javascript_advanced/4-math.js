// function of division
function divideBy(firstNumber) {
    return function (secondNumber) {
      return secondNumber / firstNumber;
    };
  }
  
  //function of addition
  function addBy(firstNumber) {
    return function (secondNumber) {
      return firstNumber + secondNumber;
    };
  }
  
  // closures
  let addBy100 = addBy(100);
  let addBy1000 = addBy(1000);
  let divideBy10 = divideBy(10);
  let divideBy100 = divideBy(100);
  
  //Execute
  console.log(addBy100(20));
  console.log(divideBy10(20));
  console.log(divideBy100(200));
  console.log(addBy1000(20));