const router=require("express").Router()
const https=require("./Servicios.https")


router.route("/users")
        .get(https.GETtasks)
        .post(https.CreateNewTask)

router.route("/users/:id")
        .get(https.GETtaskById)
        .delete(https.DeleteTask)
        .put(https.EditTasks)

module.exports={
    router
}