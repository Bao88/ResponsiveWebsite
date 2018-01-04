var express = require('express');
var app = express();
var formidable = require("formidable");
var fs = require("fs");
var cors = require("cors");
// var bodyParser = require("body-parser");
// var expressThumbnail = require("express-thumbnail");

// import sharp from "sharp";
// app.get('/', function (req, res) {
//    res.send('Hello World');
// })
// Add headers

app.use(cors({origin: "*"}));
// app.use(bodyParser.urlEncoded({
//     extended: true
// }));

const imageFolder = "C:/MyStuff/Server/uploads/";
var Logs = [];
app.post("/get", function(req, res){
    console.log("Static file requested " + req);
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        console.log(fields);

        fs.readdir(imageFolder, (err, files) => {
                Logs.push(files);
        })
    });

    res.json({data: Logs});
    // res.end("OK");
    Logs = [];
    // res.sendFile("C:/MyStuff/Server/uploads/"+req.params[0]);
});

function copyData(savPath, srcPath) {
    fs.readFile(srcPath, function (err, data) {
            if (err){
                console.log(srcPath);
                console.log(savPath);
                throw err;
            } 
            //Do your processing, MD5, send a satellite to the moon, etc.
            fs.writeFile (savPath, data, function(err) {
                if (err){
                    console.log(srcPath);
                    console.log(savPath);
                    throw err;
                } 
                console.log('complete');
            });
        });
}


app.post('/populate', function (req, res) {
    // console.log("Hello");
    
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
        // console.log(fields);
        console.log(files);
    });
});

app.post('/upload', function (req, res) {
    console.log("Uploading");
    // console.log("Requested: " + req);
    var form = new formidable.IncomingForm();
    // save file code goes here 
    form.parse(req, function(err, fields, files) {
        //response code goes here
        var oldpath = files.data.path;
        var newpath = "C:/MyStuff/Server/uploads/" + files.data.name;
        fs.rename(oldpath, newpath, function (err){
            if(err) throw err;
            console.log(files.data.name + " is saved on server");
                // res.end("done");
        });
        // console.log(files);
        // copyData(newpath, oldpath);
        
        // res.sendFile(newpath, function(err){
        //     if(err){
        //         console.log("Error sending file");
        //     } else {
        //         console.log("Sent: ", newpath);
        //     }
        // })
        res.end("Done");
    });
});

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});