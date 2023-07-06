
const express = require("express");
const {connection} = require("./config/db");
const {router} = require("./Routes/router");
var cors = require('cors');
require("dotenv").config();
const app = express();
app.use(cors())
app.use(express.json());


app.get("/",(req, res) => {
    res.send("Welcome to Home page");
});

app.use("/book",router);

app.listen(process.env.PORT,async()=>{

    try{
        await connection
        console.log("Server connected to MongoDB");
    }catch(error){
        console.log(error);
    }
    console.log(`Server is Running at PORT ${process.env.PORT}`);
})