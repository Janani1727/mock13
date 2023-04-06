const express=require("express");



const hospitalRouter= express.Router()

const {hospitalModel} =require("../model/hospital.model")

hospitalRouter.post("/appointments",async(req,res)=>{
    const payload=req.body
    // console.log(payload)
    const post =new hospitalModel(payload)
    await post.save()
    res.send({"msg":"posts created"})

})

hospitalRouter.get("/appointments",async(req,res)=>{

    const hospital=await hospitalModel.find()
    res.send(hospital)
})



hospitalRouter.get("/appointments/:category",async(req,res)=>{
    const getData=await hospitalModel.find()
    
    return res.send(getData.filter((el)=>el.specialization===req.params.category))
})
hospitalRouter.get("/appointments/name/:query",async(req,res)=>{
    const getData=await hospitalModel.find()
    
    return res.send(getData.find((el)=>el.name===req.params.query))
})
hospitalRouter.get("/appointments/page/:page",async(req,res)=>{
    const getData=await hospitalModel.find()
    const limit=4
        res.send(getData.splice((limit*req.params.page)-limit,limit*req.params.page))
})


module.exports={hospitalRouter}
