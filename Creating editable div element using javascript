let newdiv=document.createElement('div');
newdiv.setAttribute('id','tobeEdited');
newdiv.innerText="This is new div";
document.body.appendChild(newdiv)
let input=document.createElement('input');
input.setAttribute('value','');
document.getElementById("tobeEdited").addEventListener('click',function(e){
   newdiv.replaceWith(input);
});
input.addEventListener('blur',function(e){
localStorage.setItem('Edited',input.value);
});
console.log(newdiv);
