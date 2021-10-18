const Character = require ('../models/Character');
const Movie = require ('../models/Movie');
const Genre = require('../models/Genre');


// M:N Associations
Character.belongsToMany(Movie, { through: "CharacterMovie",  timestamps: false });
Movie.belongsToMany(Character, { through: "CharacterMovie",  timestamps: false });

// // Associated characters
Genre.hasMany(Movie, { as: "movie", foreignKey: "genreId" });
Movie.belongsTo(Genre, {as: 'genre' });

