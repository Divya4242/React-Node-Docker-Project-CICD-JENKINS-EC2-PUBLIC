const express = require('express');
const app = express();
const path = require('path');
var cors = require('cors')
app.use(cors({
        origin: [ 'https://tag.devopswithdivya.me/' , 'https://tag.devopswithdivya.me' , '*'  ]
}))

app.use(express.json());

console.log("Server started");
app.get('/',(req,res)=>{
        res.send("Hello");
})

app.get('/health',(req,res)=>{
    res.status(200);
    res.send("All Good");
})

app.post("/add",(req,res)=>{
    const {num1, num2} = req.body;
    const result = Number(num1) + Number(num2)
    res.status(200).send({
        "result": result
    });
})

// app.post("/sub",(req,res)=>{
//     const {num1, num2} = req.body;
//     const result = Number(num1) - Number(num2)
//     res.status(200).send({
//         "result": result
//     });
// })

app.listen(5000); 
