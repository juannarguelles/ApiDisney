const express = require('express');
const router = express.Router();
const Genre = require('../models/Genre')
const Movie = require('../models/Movie')

// GET 
router.get('/', (req, res) => {
    Genre.findAll({
        include: [{
            model: Movie,
            as: "movie",
            attributes: ['title']    
        }],
        attributes: ['image', 'name']   
    }).then(genres => res.json(genres))
})

// READ 
router.get('/:id',  (req, res) => {
    Genre.findByPk(req.params.id, {include: [{
        model: Movie,
        as: "movie",
        attributes: ['title']    
    }],})
    .then(post=>{res.json(post)})
})

module.exports = router;