const db = require('../../data/dbConfig');

function findById(project_id){
  return db('project').where({project_id}).first();
}

function getAllProjects(){
  return db('project');
}

async function postingProject(projectData){
  const newProject = await db('project').insert(projectData);
  return findById(newProject);
}

module.exports = {
  postingProject,
  getAllProjects
};