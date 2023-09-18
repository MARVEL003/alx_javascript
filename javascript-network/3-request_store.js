// Import the request and fs modules
const request = require("request");
const fs = require("fs");

// Get the URL and the file path from the arguments
const url = process.argv[2];
const file_path = process.argv[3];

// Use the request function to get the contents of the webpage
request(url, (error, response, body) => {
  // Check for errors
  if (error) {
    console.error(error);
    return;
  }

  // Write the body response to the file using UTF-8 encoding
  fs.writeFile(file_path, body, "utf8", (error) => {
    // Check for errors
    if (error) {
      console.error(error);
      return;
    }
  });
});