angular.module('TestApp', []);

angular.module('TestApp').controller('MainController', ctrlFunc);

function ctrlFunc($scope){
    $scope.message = 'Hello';
    $scope.people = [
        {
            name: 'John Doe'
        },
        {
            name: 'Jane Doe'
        },
        {
            name: 'Jill Doe'
        }
    ]
}