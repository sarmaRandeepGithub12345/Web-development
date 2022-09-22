
const json=document.getElementById('jsonRadio');
const cparam=document.getElementById('paramsRadio');

const paramBox=document.getElementById('parametersBox');
const JsonBox=document.getElementById('requestJsonBox');

//REequest Type checking
paramBox.style.display='none';
JsonBox.style.display='block';
console.log('Hi');

json.addEventListener('click',function(e){
paramBox.style.display='none';
JsonBox.style.display='block';

});
cparam.addEventListener('click',function(e){
    paramBox.style.display='block';
    JsonBox.style.display='none';
});
//End of request type checking
let count=2;
const addmore=document.getElementById('addParam');
//Parent of additional custom parameters
const extraparams=document.getElementById('params');
//Event Listener for adding custom paramaters
addmore.addEventListener('click',function(e){
//Adding new parameter key and paramter value
    let string=``;
string=`
<div id="parametersBox-${count}">
<div class="form-row">
    <label for="url" class="col-sm-2 col-form-label">Parameter ${count}</label>
    <div class="col-md-4">
        <input type="text" class="form-control" id="Key" placeholder="">
    </div>
    <div class="col-md-4">
        <input type="text" class="form-control" id="Value" placeholder="">
    </div>
    <button  onclick="deletefunct(${count})" class="btn btn-primary">-</button>
</div>
`;
extraparams.innerHTML+=string;
console.log(count);
count++;

});

//Deletion of custom parameters using "-"
function deletefunct(num){
//O(n) deletion
document.getElementById('parametersBox-'+num).remove();
}
//Submit Post Master
let submit=document.getElementById("submit");
submit.addEventListener('click',(e)=>{
    
let url=document.getElementById("url");
let requestType=(document.getElementById('get').checked)?'GET':'POST';

let data;
if(document.getElementById('jsonRadio').checked){
    let area=document.getElementById('requestJsonText');
data=String(area.value);


}else{


}

console.log(data);
let responsePrism=document.getElementById('responsePrism');

// GET request fetch API
if(requestType=='GET'){
   fetch(url.value)
  .then((response) => response.text())
  .then((data) =>{
    responsePrism.innerText=data;
  });
}else{
   /* let data = {
        first_name: 'John',
        last_name: 'Adams',
        job_title: 'Software Engineer'
     };*/
     const options = {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
     },
    
    
     }
     fetch(url.value, options)
        .then(res => res.text())
        .then(res => {responsePrism.innerText=res;
        });   


}
})

/*
 const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
 }
 }
 fetch('https://reqres.in/api/users', options)
    .then(res => res.json())
    .then(res =>  document.getElementById('responsePrism').innerHTML=res);

*/
