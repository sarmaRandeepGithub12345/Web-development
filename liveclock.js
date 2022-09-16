//Use this html file below
//Beginning of Html file
/*<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
 --><link rel="stylesheet" href="file2.css">
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <title>Document</title>
</head>
<body>
  <div class="container">
<p id="clock"></p> 

  </div>


</body>
<!-- <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js" integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous"></script>
 --><script src="js folder/file2.js"></script>
</html>*/
//End of HTML File
//Beginning of JS file
setInterval(() => {
 let date=new Date();
 let hours=date.getHours();
 let minutes=date.getMinutes();
 let seconds=date.getSeconds();
 let ampm="AM";
 ampm=(hours>=12)?"PM":"AM";
if(hours>=12)hours%=12;
 hours=hours==0?12:(hours<10)?`0${hours}`:hours;
 minutes=(minutes<10)?`0${minutes}`:minutes;
 seconds=(seconds<10)?`0${seconds}`:seconds;

document.getElementById("clock").innerHTML=`<h1>${hours}:${minutes}:${seconds}:${ampm}</h1>`;
});
//End of JS file
