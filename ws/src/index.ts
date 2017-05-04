import * as express from 'express';
import {Server} from  'ws';


const wsServer = new Server({
    port: 4300
});



const  list = [];




wsServer.on('connection', (ws) => {

    if(list.indexOf(ws)==-1){
        list.push(ws);
    }
    ws.send('ws connection');

    ws.on('message', (msg) => {

    });

});
setInterval(()=>{
    
    list.forEach(ws=>{
        ws.send(Math.random()*5);
    })
},5000);







