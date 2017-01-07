(function() {
    angular.module('socialApp')
        .controller('AppController', function() {
            this.iconsOnly = true;

            this.toggleIcons = function() {
                this.iconsOnly = !this.iconsOnly;
            }

        });
})();