//Beginning of HTML file
/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Drag and Drop - Js Tutorial 64</title>
    <link rel="stylesheet" href="file2.css">
</head>
<body>
<div class="whiteBox">
   <div class="imgBox" draggable="true">

   </div>
</div>
<div class="whiteBox"></div>
<div class="whiteBox"></div>
<div class="whiteBox"></div>


</body>
<script src="jsfolder/file2.js"></script>
</html>*/
//End of html file
//Start of css file
/*
.whiteBox{
    display:inline-block;
    background-color: rgb(201, 197, 197);
    height: 145px;
    width:150px;
    margin:10px;
    border:2px solid black;
 }
.imgBox{
background-image: url('https://media-exp1.licdn.com/dms/image/C4D03AQFIunib6h0_jw/profile-displayphoto-shrink_800_800/0/1655238309067?e=1668643200&v=beta&t=7N3Rzx5-mQbHyb_lc56mFMgfLy9fPWd84bXc9QKy_4Q');
background-size: 150px 145px;
height: 145px;
    width:150px;

}
.dragging{
    opacity:0.5;
}
.temp{
    border:dashed;
}*/
//End of CSS file
//Start of JS file
const imgBox=document.querySelector('.imgBox');
const whiteBoxes=document.querySelectorAll('.whiteBox');

imgBox.addEventListener("dragstart",(e)=>{
console.log('Dragstart');
imgBox.classList.add('dragging');
});
imgBox.addEventListener("dragend",(e)=>{
    console.log('Dragend');
    imgBox.classList.remove('dragging');
    });
for(let whiteBox of whiteBoxes){
whiteBox.addEventListener('dragenter',(e)=>{


})    
whiteBox.addEventListener('dragover',(e)=>{
    e.preventDefault();
    whiteBox.classList.add('temp');
    const draggable=document.querySelector('.dragging');
    whiteBox.appendChild(draggable);
})
whiteBox.addEventListener('dragleave',(e)=>{
    whiteBox.classList.remove('temp');  
})
whiteBox.addEventListener('drop',(e)=>{
    whiteBox.classList.remove('temp');  
})
//End of JS file
