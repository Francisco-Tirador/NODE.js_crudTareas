
const {getTasks,getTaskById,createTask,deleteTask,editTasks}=require("./Controllers")

//////////////////////////////////////////
const GETtasks=(req,res)=>{
    const data=getTasks() 
    res.status(200).json(data)
}

///////////////////////////////////////////

const GETtaskById=(req,res)=>{
    const id=Number(req.params.id)
    const data=getTaskById(id)
    if(data===undefined){
        res.status(400).json({Err:"Bro este id mo exite"})
    }else{res.status(200).json(data)}
console.log(data)
}

//////////////////////////////////////////

const CreateNewTask=(req,res)=>{
    const data=req.body
    const dataTotal=createTask(data)
if(dataTotal===0){
    res.status(400).json({Err:"Hacen falta datos"})
}else{
    res.status(201).json(dataTotal)
}
console.log(dataTotal)
}

//////////////////////////////////////////

const DeleteTask=(req,res)=>{

    const id=Number(req.params.id)
    const data= deleteTask(id)
if(data===0){
    res.status(400).json({Err:"Esta id no existe bro"})}
    else{
        res.status(200).json(data)
}
}
//////////////////////////////////////////

const EditTasks=(req,res)=>{
    const id=Number(req.params.id)
    const body=req.body
    const data=editTasks(body,id)
    if(data===0){
        res.status(400).json({ERR:"El id no existe o hacen falta datos"})
    }else{
        res.status(200).json(data)
    }


}

//////////////////////////////////////////
module.exports={
    GETtasks,
    GETtaskById,
    CreateNewTask,
    DeleteTask,
    EditTasks
    
}




