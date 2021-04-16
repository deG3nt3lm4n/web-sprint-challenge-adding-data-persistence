const router = require('express').Router();
const Project = require('./model');




// [POST] /api/projects
router.post('/', (req,res,next) => {
  res.json('post request in projects');
});

// [GET] /api/projects
router.get('/', (req,res,next) => {
  res.json('get request in porjects');
});



module.exports = router;