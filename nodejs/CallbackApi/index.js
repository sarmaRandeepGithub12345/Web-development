//File system - Callback API
import *  as fs from 'fs'

/*Creating directory - path should be there*/
/*
fs.mkdir('D:\\nodejs\\CallbackApi\\test',(error)=>{
if(error)throw error;
console.log("Directory created....");
})*/
//------------------------------------------------
/*Creating directory - path not needed to be there*/
/*
fs.mkdir('D:\\nodejs\\CallbackApi\\test\\dest',{recrusive:true},(error)=>{
if(error)throw error;
console.log("Directory created....");
})*/

//-------------------------------------------------

/*Read a directory*/
/*
fs.readdir('D:\\nodejs\\CallbackApi',(error,files)=>{
    if(error) throw error;
    console.log(files);
})
*/
//--------------------------------------------------
 
/*Remove directory */
//file 'test' at the end must b present ,if nt it will throw up error
// N file 'test' should not have a any sub files
/*fs.rmdir('D:\\nodejs\\CallbackApi\\test',(error)=>{
    if(error)throw error;
})*/
//---------------------------------------------------

/*Write file*/
/*
fs.writeFile('readme.txt','Hello world',(error)=>{
    if(error)throw error;
});*/
//---------------------------------------------------

/*Read file*/
/*
fs.readFile('readme.txt',(error,data)=>{
    if(error) throw error;
    console.log(String(data));
})
//OR
fs.readFile('readme.txt','utf-8',(error,data)=>{
    if(error) throw error;
    console.log(data);
})*/

//--------------------------------------------------

/* Append File*/
/*
fs.appendFile('readme.txt','Geeky shows',(error)=>{
    if(error) throw error;
    
})*/

//-------------------------------------------------
/*COpy file*/
/*
fs.copyFile('readme.txt','new.text',(error)=>{
    if(error)throw error;
});*/

//-------------------------------------------------

/* Get file information using 'stat' */

fs.stat('D:\\nodejs\\CallbackApi\\test',(error,stats)=>{
    if(error)throw error;
console.log(stats.isDirectory());//true
console.log(stats.isFile());//false
console.log(stats);
})




















