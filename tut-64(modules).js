// we know the that build-in modules are the code which are already been written and we are just importing it and using it 
// just like bootstrap jasa import karun use karto tasach module pn use karu apn

const fs = require("fs");//creating the file object 
let text = fs.readFileSync("file.txt","utf-8");//first argument is file name,second is encoding


console.log("The contain of a file is :\n");
console.log(text);

console.log("now to rewrite in file and to create new file we can use");

text = text.replace("THIS","Edited file");//making changes 

console.log("creating new file ");

fs.writeFileSync("edited.txt",text); //first argument name of new file and second argument is name of variable in which object is store

// NOTES:-
// There are 3 typres of module 
// 1.the in-build module 
// 2. the module which we made (user- defined module).
// 3.THE third party module which we can import form NVP