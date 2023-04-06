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

// hospitalRouter.get("", async (req, res) => {
//     const { page = 1, limit , name, q, date } = req.query;
//     try {
//       if (date && name) {
//         if (date === "asc") {
//           let hospital = await hospitalModel.find({ name })
//             .sort({ date: 1 })
//             .skip((page - 1) * limit)
//             .limit(limit);
//           return res.status(200).send(hospital);
//         } else if (date === "desc") {
//           let hospital = await hospitalModel.find({ name })
//             .sort({ date: -1 })
//             .skip((page - 1) * limit)
//             .limit(limit);
//           return res.status(200).send(hospital);
//         }
//       } else if (q && name) {
//         let temp = new RegExp(q, "i");
//         let hospital = await hospitalModel.find({ name: temp }).limit(limit);
//         return res.status(200).send(hospital);
//       } else if (name) {
//         let hospital = await hospitalModel.find({ name })
//           .skip((page - 1) * limit)
//           .limit(limit);
//         return res.status(200).send(hospital);
//       } else if (q) {
//         let temp = new RegExp(q, "i");
//         let hospital = await hospitalModel.find({ name: temp }).limit(limit);
//         return res.status(200).send(hospital);
//       } else {
//         let hospital = await hospitalModel.find()
//           .skip((page - 1) * limit)
//           .limit(limit);
//         return res.status(200).send(hospital);
//       }
//     } catch (error) {
//       return res.send(error.message);
//     }
//   });

module.exports={hospitalRouter}
