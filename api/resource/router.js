const router = require('express').Router();


// [POST] /api/resources
router.post('/', (req,res,next) => {
  res.json('post request complete');
});

// [GET] /api/resources
router.get('/', (req,res,next) => {
  res.json('get request compler');
});


module.exports = router;