const express = require('express');
const router = express.Router();
const Character = require('../models/Character');

// GET ALL 
router.get('/', (req, res) => {
    Character.findAll({
        attributes: ['image', 'name']   
    }).then(characters => res.json(characters))
})


// CREATE 
router.post('/', (req, res) => {
    Character.create({
        image: req.body.image,
        name: req.body.name,
        age: req.body.age,
        weight: req.body.weight,
        history: req.body.history,
    }).then(post =>{
        res.json(post);
    })
})


// READ 
router.get('/:id', (req, res) => {
    Character.findByPk(req.params.id)
    .then(characters => res.json(characters))
})


// Associated Movie characters/:id/movies

router.get('/:id/movies', (req, res) => {
    Character.findByPk(req.params.id).then(character => {
        character.getMovies({ attributes: ['title'] }).then(characters => {
            res.json(characters);
        })
    });
});


// UPDATE characters/:id
router.patch('/:id', (req, res)=>{
    Character.update({
        image: req.body.image,
        name: req.body.name,
        age: req.body.age,
        weight: req.body.weight,
        history: req.body.history,
    },{
        where: {
            id: req.params.id
        }
    }).then(result =>{
        res.json(result)
    })
})

// DELETE characters/:id
router.delete('/:name', (req, res) => {
    Character.destroy({
        where: {
            name: req.params
        }
    }).then(result => {
        res.json(result)
    })
})


// BUSQUEDA


module.exports = router;