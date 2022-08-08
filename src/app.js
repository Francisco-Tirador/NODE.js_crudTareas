const express=require("express")
const Rutas=require("./users/routes.users").router
require("dotenv").config()

const app=express()
app.use(express.json())

app.use("/api/v1/",Rutas)



const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Bro andamos rolando en el puerto ${port}`)
})
