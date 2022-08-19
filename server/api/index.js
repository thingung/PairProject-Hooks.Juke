const router = require('express').Router()

// connect your API routes here!
router.use('/api/albums', require('./api/albums'))


module.exports = router
