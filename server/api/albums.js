const router = require('express').Router()
const {Album} = require('../db/Album')

router.get('/', async(req, res, next) => {
    try{
        const allAlbums = await Album.findAll();
        console.log(allAlbums);
    }catch(error){
        next(error);
    }
})