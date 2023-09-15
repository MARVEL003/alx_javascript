const request = require('request');

const apiUrl = process.argv[2];

const characterId = 18;

function countMoviesWithCharacter(apiUrl, characterId) {
  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error('Request failed with status code:', response.statusCode);
      return;
    }

    const films = JSON.parse(body).results;
    let count = 0;

    films.forEach((film) => {
      if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
        count++;
      }
    });

    console.log(count);
  });
}

if (!apiUrl) {
  console.error('Please provide the API URL as the first argument.');
} else {
  
  countMoviesWithCharacter(apiUrl, characterId);
}
