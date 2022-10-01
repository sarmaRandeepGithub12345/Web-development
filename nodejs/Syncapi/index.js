import * as fs from'fs'

//Synchronous APIs perform all operations synchronously,bloacking the event loop until the operation fails or completes


/* Creating directory - path should be there
 */
/* fs.mkdirSync('D:\\nodejs\\Syncapi\\test');
 */
//-----------------------------------------------
/* Creating directory - path need not be there
 */
 /*fs.mkdirSync('D:\\nodejs\\Syncapi\\test\\demo',{recursive:true});
 */
//-----------------------------------------------

/* Read content from directory */
/* console.log(fs.readdirSync('D:\\nodejs\\Syncapi'));
 */

//------------------------------------------------

/* Remove directory - directory should be empty*/

/* fs.rmdirSync('D:\\nodejs\\Syncapi\\test\\demo');
 */
//--------------------------------------------------

/* Create and write file
 */

/* fs.writeFileSync('readme.txt','hold on not');
console.log("hello world not"); */
//-------------------------------------------------

/* Read file */

/* console.log(String(fs.readFileSync('readme.txt')));
 */
//---------------------------------------------------

/* Append data to file*/

/* fs.appendFileSync('readme.txt','Appended material');
 */
//----------------------------------------------------

/* Copy data to file*/
//path should be mentioned if the file is to be created in other directory
/* fs.copyFileSync('readme.txt','info.txt');
 */
//----------------------------------------------------

/* Get file Information
 */
const stats=fs.statSync('D:\\nodejs\\Syncapi');
console.log(stats.isDirectory());
console.log(stats.isFile());






