// require filesystem module
const fs = require("fs");


//creating a new file
fs.writeFileSync("nishi.txt"," this is my first node js ");

// rewrite the statement
fs.writeFileSync("nishi.txt","nhhfksskfjhks");

// add some more line
fs.appendFileSync("nishi.txt","hello world");

// read file'
const buf=fs.readFileSync("nishi.txt");
// text in buffer 
console.log(buf);
// {/* <Buffer 6e 68 68 66 6b 73 73 6b 66 6a 68 6b 73> */}
org=buf.toString();
// text format
console.log(buf.toString());

// rename file
fs.renameSync("nishi.txt","ray.txt");

// create a folder
fs.mkdirSync("nishi");

// read file without using tostring function
const read=fs.readFileSync("ray.txt","utf-8");
console.log(read);

// delete a file
fs.unlinkSync("ray.txt");

// delete a folder
fs.rmdirSync("nishi");