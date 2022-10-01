//--------------------------------------------
// File system - promise API
import * as fs from 'fs/promises'

/*Creating directory -Path should be there*/
/* try{
    
await fs.mkdir('D:\\nodejs\\file\\test');
console.log("directory created...");
}catch(error){
console.log(error);
} */
//-------------------------------------------


/*Creating directory -Path not required to be there*/
 /*try{
  
    await fs.mkdir('D:\\nodejs\\file\\test\\demo',{ recursive:true });
    console.log("directory created...");
    }catch(error){
    console.log(error);
    } */
//-------------------------------------------
/*Reading files from a directory*/    
    
try{
  
       const files= await fs.readdir('D:\\nodejs\\file');
       console.log(files); 
       console.log("directory obtained...");
        }catch(error){
        console.log(error);
        } 
//-------------------------------------------
/*Removing files from a directory*/    
/*    
try{
  //only if u have a directory with the current file
    await fs.rmdir('D:\\nodejs\\file\\test');
     
    console.log("directory removed...");
     }catch(error){
     console.log(error);
     } 
*/
//-------------------------------------------

/*create and write file*/
/*try{
    
    await fs.writeFile('readme.txt','Hello world');
       
       }catch(error){
       console.log(error);
       } 
*/
//-------------------------------------------
/*Read file
try {
  console.log( String(await fs.readFile('readme.txt')))
} catch (error) {
   console.log(error); 
}*/
//--------------------------------------------
/*Append data into file*/
/*
try {
    await fs.appendFile('readme.txt','lullajaan');
} catch (error) {
    
}*/
//---------------------------------------------
/*Copy file*/
/*
try {
    await fs.copyFile('readme.txt','info.txt');
} catch (error) {
    console.log(error);
}*/
//----------------------------------------------

/*Get file information*/

try {
    const stats=await fs.stat('D:\\nodejs\\file');
    console.log(stats.isDirectory());
    console.log(stats.isFile());
} catch (error) {
    
}



