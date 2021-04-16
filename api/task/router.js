const router = require('express').Router();
const Tasks = require('./model');
const {taskBody} = require('../middleware/middleware');

// [POST] /api/tasks
router.post('/', taskBody, async (req,res,next) => {
  try {
    const data = await Tasks.postTask(req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

// [GET] /api/tasks
router.get('/', async (req,res,next) => {

  try {
    const data = await Tasks.getTask();
    res.json(data);
  } catch (err) {
    next(err);
  }
});


module.exports = router;