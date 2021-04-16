const router = require('express').Router();
const Resource = require('./model');
const { checkBody } = require('../middleware/middleware');


// [POST] /api/resources
router.post('/',checkBody, async (req,res,next) => {
  try {
    const successfull = await Resource.resourcePost(req.body);
    res.json(successfull);
  } catch (err) {
    next(err);
  }
});

// [GET] /api/resources
router.get('/', (req,res,next) => {
  res.json('get request compler');
});


module.exports = router;