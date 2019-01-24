var http = require("http");
var fs = require("fs");


function onRequest(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
fs.readFile("indx.html",null,function(error,data){
if(error){
    res.writeHead(404);
res.write("Error in file or file not found");
}else{
    res.write(data);
}
res.end();
})
//res.write("index.html");

}
http.createServer(onRequest).listen(3000);