import http from 'http'
import fs from 'fs'


const server =http.createServer((req,res)=>{
    res.writeHead(200,"OK",{"Content-Type":"text/html"})
    /*if(req.url==='/')
    res.end('<h1>Home Page</h1>');//if this is not used then the page will continue to buffer
    if(req.url==='/about')
    res.end('<h1>About Page</h1>');
    if(req.url==='/content')
    res.end('<h1>Content Page</h1>');*/

    if(req.url==='/')
    fs.readFile('./home.html',(error,data)=>{
if(error)throw error;
res.end(data)
    });
    //if this is not used then the page will continue to buffer
    if(req.url==='/about')
    res.end('<h1>About Page</h1>');
    if(req.url==='/content')
    res.end('<h1>Content Page</h1>');

    });
 //'process.env.PORT' used for dynamic port assigning 
  const port=process.env.PORT || 8000;  
  const host ='localhost';  
    server.listen(port,host,()=>{
        console.log('Server running at http://localhost:8000')
    })
