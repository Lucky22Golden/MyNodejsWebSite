
const path = require('fs');
const express=require('express');
const mysql = require('mysql');
const app=express();
app.use(express.json());

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'db_animal'
})

con.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Connected!!!')
    }

})

app.get("/animals",(req,res)=>{
    con.query("select * from animals",function(err,result,fields){
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})
app.get('/scripts/animals.js', function(req, res) {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile(__dirname + '/scripts/animals.js');
    // Serve the JavaScript file here
});

  app.get("/",(req,res)=>{

    res.sendFile(__dirname + '/Home.html');
  })

  app.get(["/", "/Home"], (req, res) => {
    res.sendFile(__dirname + '/Home.html');
});

// Serve Contacts.html for /Contacts
app.get("/Contact", (req, res) => {
    res.sendFile(__dirname + '/Contact.html');
});

// Serve About.html for /About
app.get("/About", (req, res) => {
    res.sendFile(__dirname + '/About.html');
});

// Serve Random.html for /Random
app.get("/Random", (req, res) => {
    res.sendFile(__dirname + '/Random.html');
});
  app.use('/css', express.static(__dirname + '/css'));
  app.use('/pictures', express.static(__dirname + '/pictures'));
  app.use('/scripts', express.static(__dirname + '/scripts'));

  app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Port 3000 on!!")
    }
  })