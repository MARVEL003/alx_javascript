const fs = require("fs");
const request = require("request");

const url = process.argv[2];
const file_path = process.argv[3];

request(url, function (error, response, body)
{
  
  if (error) {
    console.error(error);
    return;
  }

  fs.writeFile(file_path, body, "utf8", function(error) {
    if (error) {
      console.error(error);
      return;
    }
  });
});