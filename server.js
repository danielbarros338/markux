let express = require('express');
let path = require('path');
let app = express();

app.use(express.static(__dirname + '/')); //CSS
app.use(express.static(__dirname + '/controller')); //JavaScript

app.use('/', (req, res) =>{
    res.sendFile(path.join(__dirname + "/src/views/index.html"));
}).listen(8080, ()=>console.log("server on"));