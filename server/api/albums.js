const router = require('express').Router()
const {Album, Artist, Song} = require('../db')

// /api/albums
router.get('/', async (req, res, next) => {
    try{
        const allAlbums = await Album.findAll({
            include: [{model: Artist}]
        });
        res.send(allAlbums);
    }catch(error){
        next(error);
    }
});


// /api/albums/:id
router.get('/:id', async (req, res, next) => {
    try {
        const one_album = await Album.findByPk(req.params.id, {
            include: [{model: Artist}, {model: Song}]
        });
        res.send(one_album);

    } catch (error) {
        next(error);
    }
});
module.exports = router;