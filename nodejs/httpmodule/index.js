//Create web server - http module
import http from 'http'
//--------------------------------------------
/*
const server =http.createServer((req,res)=>{
res.setHeader('Content-Type','text/plain');
res.end('Response from server');//if this is not used then the page will continue to buffer

});


server.listen(8000,'localhost',()=>{
    console.log('Server running at http://localhost:8000')
})*/
//---------------------------------------------
const server =http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.end('Response from server 1');//if this is not used then the page will continue to buffer
    
    });
 //'process.env.PORT' used for dynamic port assigning 
  const port=process.env.PORT || 8000;  
  const host ='localhost';  
    server.listen(port,host,()=>{
        console.log('Server running at http://localhost:8000')
    })





