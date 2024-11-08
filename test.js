const express =require('express');

const PORT=8080;
const HOST='0.0.0.0';
 
const app =express();

app.get('/',(req,res)=>{
res.send("This is My first page ,Hi bia")

});

app.get('/hello',(req,res)=>{

    res.send("Hallo World!")

});

app.get('/users',(req,res)=>{

    res.send("A list of users")

});
app.listen(PORT,HOST,() =>{

console.log('App started successfully !');

});



