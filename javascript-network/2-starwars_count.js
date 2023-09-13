const request = require('request');

// Check if the API URL is provided as a command-line argument
if (process.argv.length !== 3) {
  console.error('Usage: node 2-starwars_count.js <API URL>');
  process.exit(1);
}

// Get the API URL from the command-line argument
const apiUrl = process.argv[2];

// Define the character ID for "Wedge Antilles"
const characterId = 18;

// Make a GET request to the API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  // Parse the JSON response
  const data = JSON.parse(body);

  // Check if the API response includes 'results' and it is an array
  if (!Array.isArray(data.results)) {
    console.error('Invalid API response');
    process.exit(1);
  }

  // Filter the films where "Wedge Antilles" appears
  const filmsWithWedgeAntilles = data.results.filter((film) =>
    film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
  );

  // Print the number of films where "Wedge Antilles" is present
  console.log(filmsWithWedgeAntilles.length);
});
