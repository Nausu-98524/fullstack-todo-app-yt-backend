const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express();
const port = 8000;
const routes = require('./routes/ToDoRoute')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())


// app.get("/", (req, res)=>{
//     res.status(201).json("server created")
// })

// Login
app.post("/", async(req, res)=>{
    const{email, password} = req.body

    try {
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }else{
            res.json("notexist")
        }
    } catch (error) {
        res.json("notexist")
    }
})

// Register
app.post("/signup", async(req, res)=>{
    const{email, password} = req.body

    const data = {
        email:email,
        password:password
    }

    try {
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    } catch (error) {
        res.json("notexist")
    }
})

app.use(routes)

app.listen(port, ()=>{
    console.log(`Server started at posrt no: ${port}`);
})