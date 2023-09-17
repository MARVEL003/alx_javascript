const request = require('request');
const fs = require('fs');

// Check if the script is provided with the required arguments
if (process.argv.length !== 4) {
  console.error('Usage: node 3-request_store.js <URL> <file-path>');
  process.exit(1);
}

// Get the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make an HTTP request to the specified URL
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  // Check if the response status code is successful (e.g., 200 OK)
  if (response.statusCode === 200) {
    // Write the response body to the specified file with UTF-8 encoding
    fs.writeFile(filePath, body, 'utf-8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log(`Data from ${url} has been saved to ${filePath}`);
      }
    });
  } else {
    console.error(`HTTP request failed with status code ${response.statusCode}`);
  }
});
