const mongoose=require("mongoose")

const Schema=mongoose.Schema

let BookSchema=new Schema({

    title:{
        type:String,
        required:true,
       // minlength:5,
        //maxlength:100
    },
    country:{
        type:String,
        required:true,
       // minlength:5,
        //maxlength:100
    },
    author:{
        type:String,
        required:true,
        //minlength:3,
        //maxlength:50
    },
    year:{
        type:Number,
        // required:true
    },
    genre:{
        type:String,
       // required:true,
       // enum:["Fiction","Non-Fiction","Biography","Thriller","Mystery"]
    },
    pages:{
        type:Number,
        required:true,
       // min:100,
        //max:10000
    },
    price:{
        type:Number,
       // required:true,
        min:1,
        max:1000
    },
    imageLink:{
        type:String,
        //required:true
    }
 
})

module.exports=mongoose.model("Book",BookSchema)