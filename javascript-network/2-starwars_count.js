const axios = require('axios');

// URL to the Star Wars API films endpoint
const apiUrl = process.argv[2]; // The API URL is passed as a command-line argument

// Character ID for "Wedge Antilles"
const characterId = 18;

// Function to fetch the movies and count appearances of "Wedge Antilles"
async function countMoviesWithCharacter(apiUrl, characterId) {
  try {
    const response = await axios.get(apiUrl);
    const films = response.data.results;
    let count = 0;

    films.forEach((film) => {
      if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
        count++;
      }
    });

    console.log(count);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Check if the API URL is provided as a command-line argument
if (!apiUrl) {
  console.error('Please provide the API URL as the first argument.');
} else {
  // Call the function to count movies with "Wedge Antilles"
  countMoviesWithCharacter(apiUrl, characterId);
}
