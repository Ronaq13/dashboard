(function() {
    angular.module('socialApp')
        .controller('AppController', function($scope) {
            this.iconsOnly = true;

            this.toggleIcons = function() {
                this.iconsOnly = !this.iconsOnly;
            }

            $scope.name = "Raounak Sharma"

        });
})();