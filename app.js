require("dotenv").config();
const express= require("express")
const app=express()
const port=process.env.PORT|| 5000;
const connectDB=require("./db/connect")
const product_roots=require("./routes/products")
app.get("/",(req ,resp)=>{
    resp.send("this is home page")
})


app.use("/api/products",product_roots)
const start =async ()=>{
    try{
        await connectDB(process.env.MONGODB_URl)
app.listen(port,()=>{
        console.log(`${port} yes i am connected`)
})
    }catch(error){
        console.log(error)
    }
};

start();