const request = require('request');
const fs = require('fs');
const utf8 = 'utf8';

// Check if the URL and file path are provided as command-line arguments
if (process.argv.length !== 4) {
  console.error('Usage: node 3-request_store.js <URL> <file path>');
  process.exit(1);
}

// Get the URL and file path from the command-line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to the URL
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  // Write the response body to the specified file
  fs.writeFile(filePath, body, utf8, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      process.exit(1);
    }

    console.log(`Contents of ${url} have been saved to ${filePath}`);
  });
});
