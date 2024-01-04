const express=require("express")
const dotenv=require("dotenv").config()

const port =process.env.PORT|| 5001;
const app=express()

app.use("/api/contacts",require("./Routes/contactRoute"))

app.listen(port ,()=>{
    console.log(`Server is running at server ${port}`)
})