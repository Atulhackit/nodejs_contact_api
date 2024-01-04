const express=require("express")
const router=express.Router()


router.route("/").get(((req,res)=>{
    res.json({message:"Get all contacts"})
}))
router.route("/:id").get(((req,res)=>{
    res.json({message:`get contact for id ${req.params.id}`})
}))
router.route("/:id").put(((req,res)=>{
    res.json({message:`update contact for id ${req.params.id}`})
}))
router.route("/").post(((req,res)=>{
    res.json({message:"Post contacts"})
}))
router.route("/:id").delete(((req,res)=>{
    res.json({message:`delete contact for id ${req.params.id}`})
}))


module.exports=router
