const joblist=['JavaDeveloper','PythonDevloper','MernDeveloper']

const AskInfojob=Manager(joblist)

AskInfojob.then(function(result)
{
    console.log(result);
}).catch(err=>console.log(err)

)

function checkJob()
{
    return true
}


function Manager(joblist)
{
    const pr=new Promise(function(resolve,reject){

        if(checkJob())
        {
            resolve("Job is Available")
        }
        else
        {
            const err=new Error("Job is Not Available")
            reject(err)
        }
        return(err)

    })
    return (pr)

}