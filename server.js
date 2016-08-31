  var app = require('express')()
  , dbconfig = require('./config/database')
  , expressconfig = require('./config/express')(app)
  , routes = require('./app/routes')(app)
  // , port = 3000
  , server = app.listen(3000,function(){console.log('Express listening on port: '+3000)})

console.log(__dirname + '/public');

  app.use(express.static(__dirname + '/public'));