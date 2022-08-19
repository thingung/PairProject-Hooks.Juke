const router = require('express').Router()
const Album = require('../db/Album')

// /api/albums
router.get('/', async (req, res, next) => {
    try{
        const allAlbums = await Album.findAll();
        console.log(allAlbums);
        res.send(allAlbums);
    }catch(error){
        next(error);
    }
});


// /api/albums/:id
router.get('/:id', async (req, res, next) => {
    try {
        const one_album = await Album.findByPk(req.params.id);
        res.send(one_album);

    } catch (error) {
        next(error);
    }
})
module.exports = router;