var express = require('express');
var router = express.Router();
var DataAccess = require("../Data Access Layer/DataAccessLayer")

/* GET home page. */
router.get("/MainPage", (req, res) => {
  res.render('MainPage', { title: 'Main Page' });
})

router.get('/', function(req, res, next) {
  res.render('AdminActor', { title: 'Register a Candidate',show:false });
});

router.post("/RegisterCandidate",(req,res)=>
{
  DataAccess.RegisterCandidate(req.body.StudentID,req.body.Name);
  res.render('AdminActor',{title:'Register a Candidate',show:true});
})

router.get("/Result",(req,res) =>
{
  let Poll = DataAccess.FinalResult().Candidate;
  let Candidate =DataAccess.FinalResult().CurrentPoll;
  let data =[];
  for(let cur in Poll)
  {
    data.push({Name:Poll[cur],Vote:Candidate[cur]});
  }
 
  console.log(data);
  data.sort((a, b) => {

    return (a.Vote > b.Vote) ? -1 : 1;
  });
 console.log(Candidate);
  res.render('Result', { title: 'Report', data, data });
});
module.exports = router;
