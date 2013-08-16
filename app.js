
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , create = require('./routes/create')
  , read = require('./routes/read')
  , update = require('./routes/update')
  , delete_ = require('./routes/delete')  
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('/', __dirname);
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/create', create.index);
app.get('/read', read.index);
app.get('/update', update.index);
app.get('/delete', delete_.index);
app.post('/',function(req, res){

    console.log(req.body.name);
    console.log(req.body.age);
    res.send(req.body.name+","+req.body.age); 

});

http.createServer(app).listen(app.get('port'), function(){
   console.log('Server跑起來了，現在時間是:' + new Date()+app.get('env'));  
   console.log('http://127.0.0.1:'+ app.get('port'));
});
