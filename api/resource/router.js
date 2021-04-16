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
router.get('/', async (req,res,next) => {
  try {
    const allResources = await Resource.getAllResources();
    if(allResources){
      res.status(200).json(allResources);
    }else{
      res.status(404).json({message: 'this doesnt work'});
    }
  } catch (err) {
    next(err);
  }
});


module.exports = router;