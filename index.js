import express from "express";
const app=express();
const PORT=4000;
app.get("/", function (request,response){
    response.send("Hello World");
});
app.listen(PORT,()=>console.log(`App started in ${PORT}`));
