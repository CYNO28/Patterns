import express from "express";
const app=express();
import {UserRouter} from "./routes/user.route";
import config from "config";
console.log("Mongo url",config.get("db.url"));
// NODE_ENV=production node src/index.ts
app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})