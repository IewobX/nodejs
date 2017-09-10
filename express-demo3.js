var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',function(rep,res){
    res.send('Hello World');
    console.log('世界你好');
});
var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
})