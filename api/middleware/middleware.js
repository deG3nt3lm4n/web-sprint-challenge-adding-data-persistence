
function checkBody(req,res,next){
  const {resource_name} = req.body;
  if(!resource_name){
    res.json({message: 'sorry name is required'});
  }else{
    next();
  }
}

module.exports = {
  checkBody
};