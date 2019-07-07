var express = require('express') //this is required to involve express
var app = express(); //The app returned by express() is in
//fact a JavaScript Function, designed to be passed to Node’s
//HTTP servers as a callback to handle requests.
var bodyParser = require('body-parser');
var todoRoutes = require('./routes/todos');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/views')); //for connecting HTML  --dirname used to connect directory
app.use(express.static(__dirname+'/public')); //for connecting CSS & JS
var port = 3000; //can be any port
//starts a UNIX socket and listens for connections on the given path
//app.listen(port,host,backlog,callback) binds and listens for connections
//on a specified host and port. If port is omitted, then the operating
//system will automatically assign an arbitrary unused port.
app.listen(port,function(){
  console.log("app is running" + port);
})
//routes http get request to specified path '/' with callback
//callbacks can be middle ware functions, series of middlewares,
//array of middle ware or combination of all
app.get('/',function(req,res){
  res.sendFile("index.html")
  //res.send({message: "hello"}); //it actually calls res.json()
});

 app.use('/api/todos', todoRoutes);
