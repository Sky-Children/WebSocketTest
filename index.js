const PORT = process.env.PORT || 8081;  
const  ws=require('ws');  
var WebSocketServer = ws.Server;
var wss = new WebSocketServer({ port: PORT });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(`received: ${message}`);
  });

  ws.send('something');
});