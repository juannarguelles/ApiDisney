const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

// GET MOVIES
router.get('/', (req, res) => {
    Movie.findAll({
        attributes: ['image', 'title', 'creation_date']
    }).then(movies => res.json(movies))
})

// CREATE
router.post('/', (req, res) => {
    Movie.create({
        image: req.body.image,
        title: req.body.title,
        creation_date: req.body.creation_date,
        qualification: req.body.qualification,
    }).then(post =>{
        res.json(post);
    }).catch(err =>{
        res.json(err)
    })
})
 
// READ 
router.get('/:id/', (req, res) => {
    Movie.findByPk(req.params.id)
   // .then(movie => { movie.getCharacters({ attributes: ['name'] })
    .then(movies => res.json(movies))
   // });
});

// Associated Character  movies/:id/characters
router.get('/:id/characters', (req, res) => {
    Movie.findByPk(req.params.id)
    .then(movie => { movie.getCharacters({ attributes: ['name'] })
    .then(movies => { res.json(movies) })
    });
});


// UPDATE movies/:id
router.patch('/:id', (req, res)=>{
    Movie.update({
        image: req.body.image,
        title: req.body.title,
        creation_date: req.body.creation_date,
        qualification: req.body.qualification,
    },{
        where: {
            id: req.params.id
        }
    }).then(result =>{
        res.json(result)
    })
})

// DELETE movies/:id
router.delete('/:id', (req, res) => {
    Movie.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result)
    })
})

module.exports = router;