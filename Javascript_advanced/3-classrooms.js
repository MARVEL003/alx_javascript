// a function that add a number depending on the room involved
function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
      //returns a function that returns "seat"
      return function () {
        return seat;
      };
    }
    // using a for loop that iterates the numbers
    let students = [];
    for (let i = 0; i < numbersOfStudents; i++) {
      students.push(studentSeat(i + 1));
    }
  
    return students;
  }
  
  // create classroom closure with 10 students
  let classRoom = (function () {
    return createClassRoom(10);
  })();
  
  //Execute
  console.log(classRoom[0]());
  console.log(classRoom[3]());
  console.log(classRoom[9]());