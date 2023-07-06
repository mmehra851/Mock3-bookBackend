const mongoose = require("mongoose");

require("dotenv").config();

const bookSchema = mongoose.Schema({

    Title:{type:"string",required:true},

    Author:{type:"string",required:true},

    Genre:{type:"string",required:true,

    enum:["Fiction","Science","Comic"]},

    Description:{type:"string",required:true},

    Price:{type:"number",required:true}
});

const bookModel = mongoose.model("book",bookSchema);

module.exports={
    bookModel
}