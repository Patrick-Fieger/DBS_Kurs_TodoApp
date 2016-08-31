var uuid = require('uuid'),
Entries = require('../models/entry')

function addEntry(req, res){
	var body = req.body;
	body.id	= uuid.v4();


	Entries.create(body,function(err){
		if(err){
			console.log(err);
			res.status(500).end();
		}else{
			res.status(200).end();
		}
	});
}

function getallentries(req,res){
	Entries.find('',function(err,entries){
		if(err){
			console.log(err);
			res.status(500).end();
		}else{
			res.send(entries).status(200).end();
		}
	})
}

function loeschen(req,res){

	Entries.find({id : req.query.id}).remove(function(err){
		if(err){
			console.log(err);
			res.status(500).end();
		}else{
			res.status(200).end();
		}
	})
}


module.exports = {
	addEntry : addEntry,
	getallentries : getallentries,
	loeschen : loeschen
}