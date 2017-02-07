var express = require("express");
var app = express();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/get-file-size',upload.single('file'),function(req,res){
    console.log('Trying to get file size');
    res.send({fileSize: req.file.size});   
});

var port = process.env.PORT || 8080;
app.listen(port,function(req,res){
    console.log("Server is listenning to port:" + port);
});