


app.listen(8080);


const express = require('express');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use(express.urlencoded());

app.use(express.static('Lab 1'));

app.get('/form', (req, res)=>{

    res.sendFile(__dirname + '/Lab 1/task2.html');

});

app.post('/formPost', (req, res)=>{

    if(req.body.password.value.length < 8){
        alert ("Password can't be less than 8 characters");
    }
    else{
        alert("Registeration Success")
    }

})


