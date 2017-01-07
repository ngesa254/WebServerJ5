var mraa = require('mraa');
var http = require('http');
var fs = require ('fs');

var port = 4242;

var lightSensor = new mraa.Aio(0);
 var dataReceived = lightSensor.read();
console.log(dataReceived);

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
  var myReadStream = fs.createReadStream('webServe3/index.html','utf8');
    myReadStream.pipe(res);
    
    var myObject = {
        name:"Mombasa",
        lightSensitivity: dataReceived
    };
    res.end(JSON.stringify(myObject));
  
    
      
});

server.listen(port, function() {
    console.log('Server listening on port ' + port);
  
});
