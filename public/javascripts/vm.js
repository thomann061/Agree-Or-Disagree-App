var app = angular.module('app', []);

app.controller('ctrl', function($scope, $http) {
    $http.get('/api/statements')
        .then(function(res) {
            $scope.statements = res.data;
        });

    $scope.agree = function(statement) {
        statement.agree++;
    }

    $scope.disagree = function(statement) {
        statement.disagree++;
    }
});