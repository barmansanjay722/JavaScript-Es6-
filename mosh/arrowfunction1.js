
const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false},
]
// normal function
const activeJobs = jobs.filter(function(job){
    return job.isActive;
});

// arrow function
const activeJobs = jobs.filter(job => job.isActive);