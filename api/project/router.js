const router = require('express').Router();
const {projectsBody} = require('../middleware/middleware');
const Project = require('./model');




// [POST] /api/projects
router.post('/',projectsBody, async (req,res,next) => {
  try {
    const projectPosted = await Project.postingProject(req.project);
    res.json(projectPosted);
  } catch (err) {
    next(err);
  }
});

// [GET] /api/projects
router.get('/', async (req,res,next) => {
  try {
    const allProjects = await Project.getAllProjects();

    const result = await allProjects.map(project => {
      if(project.project_completed === 1){
        return {
          ...project,
          project_completed: true
        };
      }else if(project.project_completed === 0 || project.project_completed === null){
        return {
          ...project,
          project_completed: false
        };
      }
    });

    res.json(result);
  } catch (err) {
    next(err);
  }
});



module.exports = router;