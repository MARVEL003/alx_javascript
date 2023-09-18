const req = require("request");

const url = `${process.argv[2]}`;

if (process.argv.length > 2) {
  req(url, function (error, response, body) {
    if (error) {
      return console.error(error);
    }

    const todos = JSON.parse(body);
    const completedTasks = {};

    // Loop through the data to count completed tasks by user
    for (const todo of todos) {
      if (todo.completed) {
        const userId = todo.userId.toString();
        if (completedTasks[userId]) {
          completedTasks[userId] += 1;
        } else {
          completedTasks[userId] = 1;
        }
      }
    }
    console.log(completedTasks);
  });
}