//Create web server - http module
import http from 'http'
//--------------------------------------------

const server =http.createServer((req,res)=>{
   
   /*if(req.url!='/favicon.ico'){
    console.log(req.url);
   }*/
//console.log(req.method)


/*Response*/
//res.statusCode=202;
//res.statusMessage='Good';
//res.setHeader('Content-Type','text/plain');

//All response paramters combined in one
res.writeHead(202,"Good",{'Content-Type':'text/plain'})

res.end('Response from serve 1');//if this is not used then the page will continue to buffer
    
    });
 //'process.env.PORT' used for dynamic port assigning 
  const port=process.env.PORT || 8000;  
  const host ='localhost';  
    server.listen(port,host,()=>{
        console.log('Server running at http://localhost:8000')
    })
