/**
 * Created by mradul on 26/11/16.
 */
(function() {
    angular.module('socialApp')
        .controller('ToolbarController', ['$mdSidenav', function($mdSidenav) {

            this.search = false;
            this.showSearch = function() {
                return this.search;
            };
            this.toggleSearch = function() {
                this.search = !this.search;
            };



        }]);
})();