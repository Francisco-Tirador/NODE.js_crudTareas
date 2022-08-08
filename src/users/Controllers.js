

const tasks=[

// {
//     id:1,
//     taskName:"finished Task",
//     description:"holasjda",
//     crator:"ROSHLANDIA"
// },
// {
//     id:2,
//     taskName:"finished Task",
//     description:"holasjda",
//     crator:"ROSHLANDIA"
// },
// {
//     id:3,
//     taskName:"finished Task",
//     description:"holasjda",
//     crator:"ROSHLANDIA"
// }


]

//////////////////////////////////

const getTasks=()=>{
    return tasks
}
////////////////////////////////////

const getTaskById=(id)=>{
    const err=0
    const index=tasks.filter(item=>item.id===id)

        return index[0]
}

/////////////////////////////////

const createTask=(data)=>{
    const err=0
    if(tasks.length==0 &&data.taskName&&data.description&&data.crator){
       const newtask={ 
            id:1,
                taskName:data.taskName,
                description:data.description,
                crator:data.crator 
        
        }
        tasks.push(newtask)
        return tasks
    }else{
        if(data.taskName&&data.description&&data.crator){
        const newtask={
            id:tasks[tasks.length-1].id+1,
             taskName:data.taskName,
             description:data.description,
             crator:data.crator 
        }
        tasks.push(newtask)
        return tasks
    }else{return err}}

}
/////////////////////////////////

const deleteTask=(id)=>{
const err=0
const index=tasks.findIndex(item=>item.id===id)

if(index!==-1){

tasks.splice(index,1)
return tasks
}
else{
    return err
}}

/////////////////////////////////

const editTasks=(body,id)=>{
    const err=0
const index=tasks.findIndex(item=>item.id===id) 

    if( tasks[index]&&body.taskName&&body.description&&body.crator){
            tasks[index]={ 
             id:tasks[index].id,
             taskName:body.taskName,
             description:body.description,
             crator:body.crator 
       
        
        }
        
         return tasks}else{
            return err
         }

}

/////////////////////////////////
module.exports={
    getTasks,
    getTaskById,
    createTask,
    deleteTask,
    editTasks
}
