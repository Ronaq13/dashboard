(function() {
    angular.module('socialApp')
        .controller('AppController', ['$scope', '$location', '$anchorScroll', function($scope) {
            this.iconsOnly = true;

            this.toggleIcons = function() {
                this.iconsOnly = !this.iconsOnly;
            };

            this.joyStart = function() {
                $scope.startJoyRide = true;
            };

            $scope.name = "";
            $scope.welcome = function() {
                $scope.name = "Raounak Sharma";
            };
            $scope.letsStart = function(tour) {
                tour.start();
            };
        }]);
})();