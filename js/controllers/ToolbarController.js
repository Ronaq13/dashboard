(function() {
    angular.module('socialApp')
        .controller('ToolbarController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
            this.search = false;
            this.showSearch = function() {
                return this.search;
            };
            this.toggleSearch = function() {
                this.search = !this.search;
            };
            this.toggleSidenav = function(componentId) {
                $mdSidenav(componentId).toggle();
            };
        }]);
})();