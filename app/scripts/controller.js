'use strict';
var groupApp = angular.module('groupApp', ["ngRoute"]);
    groupApp.config(function($routeProvider){
        $routeProvider.when('/',
        {
            templateUrl:'views/groups.html',
            controller:'GroupListCtrl'
        });
        $routeProvider.when('/table',
        {
            templateUrl:'views/table.html',
            controller:'GroupListCtrl'
        });
        $routeProvider.otherwise({redirectTo: '/'});
});



groupApp.controller('GroupListCtrl', function($scope, $http) {
	$http.get('data/groups.json').success(function(data, status, headers, config) {
		$scope.groups = data.groups;
        // console.log($scope.groups);
        $scope.myFunc = function($event){
             $http.get('data/table.json').success(function(data, status, headers, config) {
              $scope.table = data.table;
        for(var i=0; i< $scope.table.length; i++) {
                   if ($scope.table[i].id == $event.currentTarget.attributes['data-id'].value) {
                    $scope.foundindex = i;
                    alert($scope.foundindex);
                    }
                 }
           
             });

        }

        $scope.getDay = function($event){
            alert($scope.jqdatepicker);
            for(var k=0; k< $scope.table[$scope.foundindex].days.length; k++) {
                if($scope.table[$scope.foundindex].days[k].date == $("#datepickers").attributes['data-date'].value){ 
                    // ????? how to get value of date????
                    console.log($scope.table[$scope.foundindex].days[k].date);
                        $scope.dday = k;
                        alert($scope.dday);
                         }
                     }
            
        }
       
	});
});

groupApp.directive('jqdatepicker', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            $(element).datepicker({
                dateFormat: 'DD',
                onSelect: function(date) {
    
                    ctrl.$setViewValue(date);
                    ctrl.$render();
                    scope.$apply();
                }
            });
        }
    };
});


























// groupApp.controller('tableListCtrl', function($scope, $http) {
//     $http.get('data/table.json').success(function(data, status, headers, config) {
//         $scope.table = data.table;
//     });

// });

