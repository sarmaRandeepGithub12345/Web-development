//EventEmitter is class in 'events'
import EventEmitter from 'events' ;

//Creating class 'MyEmitter'
class MyEmitter extends EventEmitter{}

//creating object
const myEmitter= new MyEmitter();

//Example 1
//Register Event Listener
let m=0;
//--------------------------------------------------
/*myEmitter.on('event',()=>{
console.log(++m);
})

//Trigger event
myEmitter.emit('event');//1
myEmitter.emit('event');//2*/

//--------------------------------------------------
myEmitter.once('event',()=>{
    console.log(++m);
    })

myEmitter.emit('event');//1
myEmitter.emit('event');//Nothing appears
