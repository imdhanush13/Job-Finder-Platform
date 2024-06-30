
const mongoose = require('mongoose')

module.exports.connectdb = ()=>{
    return mongoose.connect('mongodb://127.0.0.1:27017/info');
}
//


const {connectdb} = require('./connect');
const {Books} = require('./schema');
const books_controller = require('./controller');
const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());


connectdb()
    .then(()=>{
        console.log("database connected successfullyy..!!!!!")
    })
    .catch((err)=>{
        console.log(err)
    });


app.post('/api/books',books_controller.insertbook);
    
const port = 9000;
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})
\\


const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    email: String,
    password: String,
    cpassword: String,
});
module.exports.Books = mongoose.model("Books",bookSchema);


//


const {Books} = require('./schema');

module.exports.insertbook = async(req,res)=>{
    const bk = new Books({
    email: req.body.email,
    password: req.body.password,
    cpassword: req.body.cpassword,
    })
    const book = await Books.findOne({email:(req.body.email)});
    if(book)
         return res.send({msg:"bookss exist in db"});
    const savedbks = await bk.save();
    res.send(savedbks);
}
//
