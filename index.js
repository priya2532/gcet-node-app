import express from 'express'
import cors from 'cors'

const app=express()
app.listen(8080,()=>{
    console.log("Server Started");
});
app.use(cors())
app.get("/",(req,res)=>{
    return res.send("Hello World");
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