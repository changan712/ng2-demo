import * as express from 'express';
import {Server} from  'ws';


const wsServer = new Server({
    port: 4300
});

const list = [];
wsServer.on('connection', (ws) => {

    
    if (list.indexOf(ws) == -1) {
        console.log(2);
        
        list.push(ws);
    }

});
setInterval(() => {

    list.forEach(ws => {
        ws.send(Math.random() * 5);
    })
},2000);




