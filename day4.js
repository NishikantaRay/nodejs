// const os=require("os");

// console.log(os.arch());
// freememory
// const free =os.freemem();
// // console.log(free);
// gb
// console.log(`${free/1024/1024/1024}`);

// total memory
// const total =os.totalmem();
// console.log(`${total/1024/1024/1024}`);

// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.platform());



// const path =require("path");

// console.log(path.dirname('C:/Users/Lenovo/Desktop/nodejs/day4.js'));
// console.log(path.extname('C:/Users/Lenovo/Desktop/nodejs/day4.js'));
// console.log(path.basename('C:/Users/Lenovo/Desktop/nodejs/day4.js'));
// console.log(path.parse('C:/Users/Lenovo/Desktop/nodejs/day4.js'));


const add =(a,b)=>{
    return a+b;
};

const sub =(a,b)=>{
    return a-b;
};

const mult =(a,b)=>{
    return a*b;
};

module.exports ={add,sub,mult};