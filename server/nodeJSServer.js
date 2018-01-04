var http = require("http");
var fs = require("fs");
var formidable = require("formidable");
// var thumb = require("node-thumnail").thumb;
http.createServer(function(req, res){
    if(req.url == "/upload"){
        console.log("Uploading....");
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            // console.log(err);
            // console.log(fields);
            // var buf = Buffer.from(fields.data, "base64");
            // console.log(files.data.path);
            // fs.writeFile("C:/MyStuff/ResponsiveWebSite/server/uploads/" + fields.name, buf, function(err){
            //     if(err) throw err;
            //     // res.write('File uploaded and moved!');
            //     res.writeHead(200, {"Content-Type": "text/html"});
            //     res.end();
            // });
            // console.log(fields.name);
            // console.log(files);
            var oldpath = files.data.path;
            // console.log(oldpath);
            var newpath = "C:/MyStuff/ResponsiveWebsite/server/uploads/" + files.data.name;
            var tName = "C:/MyStuff/ResponsiveWebsite/server/uploads/thumbnails/" + files.data.name;
            // console.log(newpath);
            fs.rename(oldpath, newpath, function (err){
                if(err) throw err;
                // thumb({
                //     source: newpath,
                //     destination: tName,

                // })
                    // res.write("File Uploaded and moved");
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.end();
            });
        })
        // form.parse(req, function(err, fields, files){
        //     var oldpath = files.data.path;
        //     var newpath = "C:/MyStuff/ResponsiveWebsite/server/upload" + files.data.name;
        //     fs.rename(oldpath, newpath, function (err){
        //         if(err) throw err;
        //         res.write("File Uploaded and moved");
        //         res.end();
        //     });
        //     // C:\MyStuff\ResponsiveWebSite\server\uploads
        // });
        
    }
    // res.writeHead(200, {"Content-Type": "text/html"});
    // res.end("Hello World!");
}).listen(8080);