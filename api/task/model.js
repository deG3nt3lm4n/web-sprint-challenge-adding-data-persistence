const db = require('../../data/dbConfig');

function getTaskById(project_id){
  return db('tasks').where({project_id});
}

async function postTask(projectData){
  const dataID = await db('tasks').insert(projectData);
  return getTaskById(dataID);
}

// function getTask(id){
//   return db('tasks t')
//     .join('project p', 'p.project_id', 't.project_id')
//     .select('t.task_id','t.task_description','t.task_notes','t.task_completed','p.project_name','p.project_description')
//     .where('t.project_id', id);
// }

function getTask(){
  return db('tasks as t')
  .join('project as p', 'p.project_id', 't.project_id')
  .select('t.task_id','t.task_description','t.task_notes','t.task_completed','p.project_name','p.project_description');
}

module.exports = {
  postTask,
  getTask
}