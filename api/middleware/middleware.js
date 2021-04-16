
function checkBody(req,res,next){
  const {resource_name} = req.body;
  // check if unique
  if(!resource_name){
    res.json({message: 'sorry name is required'});
  }else{
    next();
  }
}

function projectsBody(req,res,next){

  const {project_name} = req.body;



  if(!project_name){
    res.status(400).json({message: 'field required name'});
  }else{
    req.project = {
      project_name: project_name,
      project_description:!req.body.project_description ? null : req.body.project_description,
      project_completed: !req.body.project_completed ? false : true
    };
    next();
  }

}

module.exports = {
  checkBody,
  projectsBody
};