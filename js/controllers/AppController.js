(function() {
    angular.module('socialApp')
        .controller('AppController', ['$scope', '$mdMedia', '$mdSidenav', function($scope, $mdMedia, $mdSidenav) {
            $scope.toggleIcons = function() {
                $scope.iconsOnly = !$scope.iconsOnly;
            };
            $scope.$watch(function() {
                if ($mdMedia('sm') || $mdMedia('xs')) {
                    return true;
                } else {
                    return false;
                }
                console.log($scope.showButton);
            }, function(response) {
                $scope.showButton = response;
                if (response) {
                    $scope.iconsOnly = false;
                } else {
                    $scope.iconsOnly = true;
                }
                console.log("This is status of button :" + response);
            });
            $scope.toggleLeft = function() {
                $mdSidenav('left').toggle();
            };

            $scope.letsStart = function(tour) {
                tour.start();
            };
        }]);
})();