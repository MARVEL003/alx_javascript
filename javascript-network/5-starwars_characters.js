const req = require("request");
const movieID = `${process.argv[2]}`;
const url = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

if (process.argv.length > 2) {
  req(url, function (error, response, body) {
    if (error) {
      return console.error(error);
    }
    const movies = JSON.parse(body);
    movies.characters.forEach((characterURL) => {
      req(characterURL, (error, response, body) => {
        if (error) {
          return console.error(error);
        }

        const character = JSON.parse(body);
        console.log(character.name);
      });
    });
  });
}