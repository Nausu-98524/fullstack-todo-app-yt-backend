const mongoose = require("mongoose")

const Db = "mongodb+srv://todo:todo123@cluster0.jsqbcyf.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(Db)
.then(()=>{
    console.log("mongoDB connected");
}).catch(()=>{
    console.log("failed");
})

const newSchema = new mongoose.Schema({
    email:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    }
})

const collection = mongoose.model("collection", newSchema)

module.exports = collection;