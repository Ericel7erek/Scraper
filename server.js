// const http = require('http');
// const server = http.createServer((req,resp)=>{
//     console.log("Header",req.headers)
//     console.log("Method",req.method)
//     console.log("Url",req.url)
    const user = {
        name: "John",
        hobby: "Skating"
    }
//     resp.setHeader('Content-Type', 'application/json');
//     resp.end(JSON.stringify(user));

// })
// server.listen(3000);

const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'))
// app.use(express.urlencoded({extended: false}));
// app.use(express.json())
// app.get('/', (req, res)=>{
//     res.send(user)
// })
// app.get('/profile', (req, res)=>{
//     res.send("getting profile...")
// })
// app.post('/profile', (req, res)=>{
//     console.log(req.body);
//     res.send("user")
// })
app.listen(3000);