const {bookModel}= require("../Model/model");
const express = require("express")

const router = express.Router()

router.use(express.json())
require("dotenv").config()

router.post("/add",async(req,res)=>{
    try{
        let addBook = new bookModel(req.body);
        await addBook.save();
        res.send("Book Added Successfully");
    }catch(error){
        res.send(error);
    }
})

router.get("/",async(req,res)=>{
    try{
        let findBook = await bookModel.find();
        res.send(findBook);
    }catch(error){
        res.send(error);
    }
})

router.delete("/delete/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        await bookModel.findByIdAndDelete({_id:id});
        res.send("Book Deleted Successfully");
    }catch(error){
        res.send(error);
    }
})

router.get("/filter/:Genre", async(req,res)=>{
    try{
        let filterBook = await bookModel.find({"Genre" : req.params.Genre});
        res.send(filterBook)
    }catch(error){
        res.send(error)
    }
})
 
router.get("/sort/:order",async(req,res)=>{
    try{
        const order = req.params.order == "asc" ? 1:-1
        let sortedbook = await bookModel.aggregate([{$sort:{Price:order}}]);
        res.send(sortedbook);
    }catch(error){
        res.send(error);
    }
})

module.exports ={
    router
}