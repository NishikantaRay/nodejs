const fs=require("fs");

const http =require("http");

 
const server = http.createServer((req,res) =>{
    if(req.url=='/'){
        res.end("hello world");
    }else if(req.url=='/contact'){
        res.end("hello world contact");
    }else if(req.url=='/about'){
        res.end("hello world about");
    }else if(req.url=='/userapi'){
        res.writeHead(200,{"content-type":"text/html"});
        fs.readFile( "userapi.json","utf-8",(err,data)=>{
            // console.log(err);
            console.log(data);
            const userdata=JSON.parse(data);
            res.end(userdata[2].name);
        });
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("404 page not found");
    }
});


server.listen(4400,()=>{
    console.log("listen on 4400");
});