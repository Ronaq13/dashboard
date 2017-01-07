(function () {
    angular.module('socialApp')
        .controller('ContactsController', function () {
           contacts = [
               {
                   name: 'Joe Smith',
                   title: 'Graphics Designer',
                   company: 'Twitter, Inc.',
                   addressOne: '795 Folsom Ave, Suite 600',
                   addressTwo: 'San Francisco, CA 94107',
                   phone: '(123) 456-7890'

               }
           ];
        });
})();