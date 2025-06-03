import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
const app=express()
app.listen(8080,()=>{
    mongoose.connect("mongodb://localhost:27017/gcet")
    console.log("Server Started");
});
const userSchema=mongoose.Schema({
    name:{type:String},
});
const user=mongoose.model("User",userSchema);
app.use(cors());
app.get("/",(req,res)=>{
    return res.send("Good Morning");
});
app.get("/register",async(req,res)=>{
    const result=await user.insertOne({name:"John"});
    return res.json(result);
});
app.get("/greet",(req,res)=>{res.send("Greetings")})
app.get("/name",(req,res)=>{res.send("Sri Priya")})
app.get("/weather",(req,res)=>{res.send("45 degrees")})
const product=()=>{
    return[
        { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 }
    ];
};
app.get("/product",(req,res)=>{res.json(product())})
