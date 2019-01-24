var http = require('http');
function onRequest(req,res){
res.writeHead(200,{'content-type':'text/plain'});
res.write("Hello ram ram");
res.end();
}
http.createServer(onRequest).listen(3000);
