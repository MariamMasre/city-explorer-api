const express = require('express');
const cors = require ('cors');
const server = express();
const pockData = require('./assets/data.json');
server.use(cors());
const PORT = process.env.PORT;

// http://localhost:3000/
server.get('/',(req,res)=>{
    res.send("Hi from the home route");
})

// http://localhost:3001/merem
server.get('/merem',(req,res) => {
    console.log("test route");
    res.send('Hi from the test roure');
})

// http://localhost:3000/getPockNames
server.get('/getPockNames',(req,res)=> {
    let pockNames = pockData.results.map((item)=>{
        return item.name;
    })
    res.send(pockNames);
})

// http://localhost:3000/getPockData?name=pockName
server.get('/getPockData',(req,res) => {
    console.log(req.query.name);
    const result = pockData.results.find((item)=>{
       if(item.name == req.query.name)
       {
           return item;
       }
    })
    //console.log(result);
    res.send(result);
})

server.get('*', (req,res)=>{
    res.send("page not found");
})
server.listen(PORT, () => {
    console.log(`Hello, I am listening on ${PORT}`);
})