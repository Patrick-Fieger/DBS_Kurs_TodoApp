'use strict';

angular.module('app.page', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/page/page.html',
    controller: 'TodoCtrl'
  });
}])

.controller('TodoCtrl', ['ToDoService','$scope','$timeout',function(ToDoService,$scope,$timeout) {
	moment.locale('de');

	$scope.eintrag = {
		id : "",
		aufgabe : "",
		zeit : "",
		prio : ""
	}

	$scope.allentries;

	function getEntries(){
		ToDoService.getAllEntries().success(function(daswasichzurueckbekomme){
			$scope.allentries = daswasichzurueckbekomme;
			processTime();
		});
	}

	function processTime(){
		for (var i = 0; i < $scope.allentries.length; i++) {
			$scope.allentries[i].zeit = moment($scope.allentries[i].zeit).format(' LLL');
		}
	}

	$scope.changeColor = function(farbe){
		$('.color_wrapper div').removeClass('active');
		$('.' + farbe).addClass('active');
		$scope.eintrag.prio = farbe;
	}

	$scope.sendData = function(){
		ToDoService.addEntry($scope.eintrag).success(function(){
			getEntries();
		});
	}

	$scope.deleteEntry = function(id){
		if(confirm('Wollen sie wirklich diese Aufgabe löschen?')){
			ToDoService.loeschen(id).success(function(){
				getEntries();
			});
		}

	}

	getEntries();
}]);