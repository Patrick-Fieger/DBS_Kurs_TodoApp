'use strict';

angular.module('ToDoApp', [
  'ngRoute',
  'app.page',
  'app.ToDo'
]).
config(['$locationProvider','$routeProvider', function($locationProvider,$routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}])
.run(function($rootScope,$http,$timeout) {

});