const db = require('../../data/dbConfig');

function findById(resource_id){
  return db('resources').where({resource_id}).first();
}

function getAllResources(){
  return db('resources');
}

async function resourcePost(postBody){
  const data = await db('resources').insert(postBody);
  return findById(data);
}




module.exports = {
  resourcePost,
  getAllResources
}