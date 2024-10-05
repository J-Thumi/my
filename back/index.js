const express=require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const Book=require('./book.model')
app.use(cors());


mongoose.connect('mongodb://localhost:27017/Lib')
const connection=mongoose.connection
connection.on('error', err => console.log(err))
connection.once('open',()=>console.log('connected to bookstore'));



app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`);
});

app.get('/',(req,res)=>{
    res.send('haaaa');
})

app.get('/book',(req,res)=>{
    Book.find()
    .then(books => res.json(books))
    .catch(err=> res.json(err))
})