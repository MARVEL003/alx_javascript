const request = require('request');

// Check if a movie ID is provided as a command-line argument
if (process.argv.length !== 3) {
  console.error('Usage: node 1-starwars_title.js <movie ID>');
  process.exit(1);
}

// Get the movie ID from the command-line argument
const movieId = process.argv[2];

// Define the URL for the Star Wars API endpoint
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  // Parse the JSON response
  const movie = JSON.parse(body);

  // Check if the movie object is empty
  if (Object.keys(movie).length === 0 && movie.constructor === Object) {
    console.error(`No movie found with ID ${movieId}`);
    process.exit(1);
  }

  // Print the movie title
  console.log(movie.title);
});
