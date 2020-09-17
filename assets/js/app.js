var app = angular.module('myApp', ["ngRoute"]);
app.controller('authCtrl', ['$scope', function ($scope) {
    $scope.sent = "myname";
}])
app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when("/event1", {
                templateUrl: "/pages/event1.html"
            })
            .when("/event2", {
                templateUrl: "/pages/event2.html"
            })

    }])


    // color Code
    // whatsapp #4FCE5D 