const path=require('path');
/*basename means name of the file*/
console.log("Num 1: "+path.basename(__filename));//index.js
//using filename from wrapper module
console.log("Num 2: "+path.basename(__filename,'.js'));//index

/*directory name means path of the file is present*/
console.log("Num 3: "+path.dirname(__dirname));
console.log("Num 4: "+path.dirname(__filename));

/*extention name means type of the file*/
console.log("Num 5: "+path.extname(__filename));// .js is returned if the file name is index.js

/*join is used to make a path*/
console.log("Num 6:"+path.join('/search','label','course/python','oop'));
//use of 1 ".." goes 1 directory back
console.log("Num 7:"+path.join('/search','label','course/python','oop',".."));
//use of 2 ".." goes 2 directory back
console.log("Num 8:"+path.join('/search','label','course/python','oop',"..",".."));
//creating my own directory 
console.log("Num 9:"+path.join(__dirname+'/search','label','course/python','oop'));

/*Using normalise*/
console.log("Num 10: "+path.normalize('c:\\temp\\foo\\bar'));
console.log("Num 11: "+path.normalize('c:\\temp\\\\foo\\bar\\..'));
console.log("Num 12: "+path.win32.normalize('c:///\\temp\\//\\foo\\bar'));

/*Using parse*/
console.log("Num 13: ")
console.log(path.parse(__filename));
//finding rootname of directory
console.log("Num 14: "+path.parse(__filename).root);
//finding basename of directory
console.log("Num 15: "+path.parse(__filename).base);


/*Using Absolute check whether the format of directory is correct or not*/

console.log("Num 18: "+path.isAbsolute(__filename));
console.log("Num 17: "+path.isAbsolute('bar.bar'));
