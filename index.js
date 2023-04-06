const express = require('express')
const cors = require("cors")
const app = express()
const {connection}=require("./db")


app.use(express.json())
app.use(cors())
const {userRouter} =require("./routes/userRoute")
const {hospitalRouter} = require("./routes/hospitalRoute")

app.get('/', (req, res) => {
    res.send('Hello!')
})
app.use("/users",userRouter)
app.use("/",hospitalRouter)




app.listen('8080', async(req, res) => {
    try {
        await connection
        console.log("connected to db");
    } catch (error) {
        console.log(error)
    }
    console.log('Server is running!')
})