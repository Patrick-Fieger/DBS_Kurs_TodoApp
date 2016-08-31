angular.module('app.ToDo', [])
.service('ToDoService', function($http){

	function addEntry(data){
		return $http.post('/addentry',data);
	}

	function getAllEntries(){
		return $http.get('/allentries');
	}

	function loeschen(id){
		return $http.delete('/loeschen/?id=' + id);
	}


	return{
		addEntry : addEntry,
		getAllEntries : getAllEntries,
		loeschen : loeschen
	}
})