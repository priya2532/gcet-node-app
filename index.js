import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders",orderRouter)

mongoose.connect(MONGODB_URI)
  .then(() => {
    app.listen(8080, () => {
      console.log("Server Started ");
    });
  })
  .catch((error) => {
    console.log(error);
  });




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
