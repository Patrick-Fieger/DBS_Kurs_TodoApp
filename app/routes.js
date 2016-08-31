var todo = require('./controller/todo')


module.exports = function(app){
	app.post('/addentry', todo.addEntry);
	app.get('/allentries',todo.getallentries)
	app.delete('/loeschen',todo.loeschen)
}