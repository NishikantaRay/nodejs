// const EventEmitter = require("events");

// const event = new EventEmitter();

// event.on("saymyname" ,() =>{
//     console.log("my name is nishikanta ray");
// });

// event.on("saymyname",()=>{
//     console.log("my name is didu");
// });

// event.on("saymyname",()=>{
//     console.log("my name is nishi");
// });

// event.on("saymyname",()=>{
//     console.log("my name is something ");
// });
// event.emit('saymyname');


// event.on("checkmypage",(sc,msg)=>{
//     console.log(`status code is ${sc} and the msg is ${msg}`);
// });

// event.emit("checkmypage",200,"ok");

const fs = require("fs");

const http = require("http");

const server = http.createServer();

server.on("request",(req,res) =>{
    // fs.readFile("index.txt",(err,data)=>{
    //     if(err) console.log(err);
    //     res.end(data.toString());
    // });

    // const rstream = fs.createReadStream("inde.txt");
    // rstream.on("data",(chunkdata)=>{
    //     res.write(chunkdata);
    // });
    // rstream.on("end",()=>{
    //     res.end();
    // });
    // rstream.on('error',(err)=>{
    //     console.log(err);
    //     res.end("file not found");
    // });
    // const rstream = fs.createReadStream("index.txt");

    // rstream.pipe(res);

});

server.listen(8000,()=>{
    console.log("localhost 8000");
});