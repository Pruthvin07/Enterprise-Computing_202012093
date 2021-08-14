let RegisteredStudents ={};
let Candidate ={};
let CurrentPoll={};
module.exports =
{
    vote: function(StudentID,CandidateID)
    {
        if(RegisteredStudents[StudentID]==undefined)
        {
            RegisteredStudents[StudentID]=1;
            if(CurrentPoll[CandidateID] ==undefined)
            {
                CurrentPoll[CandidateID]=1;
            }
            else
            {
                CurrentPoll[CandidateID]=CurrentPoll[CandidateID]+1;
            }
            return 1;
        }
        else
        {
            return 0;
        }
    },

    RegisterCandidate: function(CandidateID,Name)
    {
        Candidate[CandidateID] = Name;
    },

    Results:function()
    {
        var max = -1;
        var ID;
        for (var cur in CurrentPoll)
        {
            if(CurrentPoll[cur]>max)
            {
                max=CurrentPoll[cur]
                ID=cur;
            }
        }
        return {ID:ID,vote:max};
    },

    FinalResult:function()
    {
        return {CurrentPoll:CurrentPoll,Candidate:Candidate};
    }
}
