var groupApp = angular.module('groupApp', ["ngRoute"]);
    .config(function($routeProvider){
        $routeProvider.when('/',
        {
            templateUrl:'views/groups.html',
            controller:'GroupListCtrl'
        });
        $routeProvider.when('/table',
        {
            templateUrl:'views/table.html',
            controller:'TableListCtrl'
        });
        $routeProvider.otherwise({redirectTo: '/'});
});