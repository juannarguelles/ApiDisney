const sequelize = require('./database/db');
const Character = require('./models/Character');
const Movie = require('./models/Movie');
const Genre = require('./models/Genre');
require('./database/associations');

// Characters
const character = [
    { name: "Aladdin", weight: 70, age: 18, image: "https://", history: "historia del personaje:", movieId: 1 },
    { name: "Alice", weight: 62, age: 18, image: "https://", history: "historia del personaje:", movieId: 1  },
    { name: "Bambi", weight: 43, age: 5, image: "https://", history: "historia del personaje:", movieId: 2 },
    { name: "Dumbo", weight: 345, age: 12, image: "https://", history: "historia del personaje:", movieId: 2 },
    { name: "Goofy", weight: 37, age: 13, image: "https://", history: "historia del personaje:", movieId: 3 },
    { name: "Mickey Mouse", weight: 4, age: 22, image: "https://", history: "historia del personaje:", movieId: 6 },
    { name: "Minnie Mouse", weight: 3, age: 19, image: "https://", history: "historia del personaje:", movieId: 5 }
];

// Movies
const movie = [
    { image: "https://", title: "Aladdin", creation_date: 12-5-2021, qualification: 2, characterId: 1, genreId: 1 },
    { image: "https://", title: "Alice in Wonderland", creation_date: 12-5-2021, qualification: 2, characterId: 1, genreId: 2 },
    { image: "https://", title: "Bambi", creation_date: 12-5-2021, qualification: 2, characterId: 3, genreId: 1 },
    { image: "https://", title: "Dumbo", creation_date: 12-5-2021, qualification: 2, characterId: 4, genreId: 4 },
    { image: "https://", title: "Mickey's Revue", creation_date: 12-5-2021, qualification: 2, characterId: 5, genreId: 1 },
    { image: "https://", title: "Steamboat Willie", creation_date: 12-5-2021, qualification: 2, characterId: 6, genreId: 1 },
    { image: "https://", title: "Plane Crazy", creation_date: 12-5-2021, qualification: 2, characterId: 7, genreId: 2 }
];

// Genre

const genre = [
    { image: "https://", name: "Animación", movieId: 1 },
    { image: "https://", name: "Fantasía", movieId: 2 },
    { image: "https://", name: "Comedia", movieId: 3 },
    { image: "https://", name: "Drama", movieId: 4 },
    { image: "https://", name: "Terror", movieId: 5 },
    { image: "https://", name: "Ciencia Ficción", movieId: 6 },
    { image: "https://", name: "Documental", movieId: 7 }
];

sequelize.sync({ force: false }).then(() => {
    // Established connection
    console.log("Established connection...");
}).then(() => {
     // Complete Character
     character.forEach(character => Character.create(character));
}).then(() => {
     // Complete Movie
     movie.forEach(movie => Movie.create(movie));
}).then(() => {
    // Complete Genre
    genre.forEach(genre => Genre.create(genre));
}).then(async()=>{
    let character1 = await Character.create({ name: "Minnie Mouse", weight: 3, age: 19, image: "https://", history: "historia del personaje:"});
    let character2 = await Character.create({ name: "Minnie Mouse", weight: 3, age: 19, image: "https://", history: "historia del personaje:"});

    let movie1 = await Movie.create({image: "https://", title: "MUCHOS A MUCHOS", creation_date: 12-5-2021, qualification: 2, genreId: 1});

    movie1.addCharacter([ character1, character2]);
});

