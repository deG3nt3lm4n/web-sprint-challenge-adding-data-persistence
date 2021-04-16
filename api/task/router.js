const router = require('express').Router();

// [POST] /api/tasks
router.post('/', (req,res,next) => {
  res.json('post request in tasks');
});

// [GET] /api/tasks
router.get('/', (req,res,next) => {
  res.json('get request in tasks');
});


module.exports = router;