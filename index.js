import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";

const app=express()
app.listen(8080,()=>{
    mongoose.connect("mongodb://localhost:27017/gcet")
    console.log("Server Started");
});


app.use("/users", userRouter);

app.use("/products", productRouter);
app.use(cors());
app.use(express.json());
// app.get("/",(req,res)=>{
//     return res.send("Good Morning");
// });
// app.post("/register",async(req,res)=>{
//     const {name,email,pass}=req.body
//     const result=await productModel.insertOne({name:name,email:email,pass:pass});
//     return res.json(result);
// });
// app.post("/login",async(req,res)=>{
//     const {name,email,pass}=req.body
//     const result=await user.insertOne({email:email,pass:pass});
//     if(result) return res.json({message:"Accepted"})
//         else{
    
//     return res.json("Invalid");
//         }
// });
// app.get("/products",async(req,res)=>{
//     const products=await product.find();
//     res.json(products);
// })

//app.get("/greet",(req,res)=>{res.send("Greetings")})
//app.get("/name",(req,res)=>{res.send("Sri Priya")})
//app.get("/weather",(req,res)=>{res.send("45 degrees")})
// const product=()=>{
//     return[
//         { id: 1, name: "Laptop", price: 50000 },
//     { id: 2, name: "Mobile", price: 20000 }
//     ];
// };
// app.get("/product",(req,res)=>{res.json(product())})
