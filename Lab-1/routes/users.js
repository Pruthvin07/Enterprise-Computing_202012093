var express = require('express');
var router = express.Router();
let DataAccess = require("../Data Access Layer/DataAccessLayer");
/* GET users listing. */
router.get('/', function(req, res, next) {
  let list = DataAccess.FinalResult();
  res.render('index',{ title: 'Vote here',show: false ,list:list.Candidate,msg:""});
});

router.post("/Vote",(req,res)=>
{
  let list = DataAccess.FinalResult();
  let status = DataAccess.vote(req.body.StudentID,req.body.CandidateID);
  if (status==0)
  res.render('index', { title: 'Vote here', show: true, msg: "Your vote has already been Registred", list: list.Candidate });
  res.render('index', { title: 'Vote here', show: true, msg: "Thank You for voting", list: list.Candidate });
})
module.exports = router;
