let btn=document.getElementById("fetchBtn");
let i=1;
let para= document.getElementById("animal-info");
btn.addEventListener('click',function(e){
let req=new XMLHttpRequest();
req.open('GET','https://learnwebcode.github.io/json-example/animals-'+i+'.json');
req.onload=function(){
    funct(JSON.parse(req.responseText));
}
req.send();
i++;
if(i>3){
    btn.style.visibility="hidden";
}
});

function funct(data){
let animal=document.getElementById("animal-info");
let html=``;
for(let i=0;i<data.length;i++){
    html+=`Name is : `+data[i].name+`\n`;
}
animal.innerText+=html;
}
