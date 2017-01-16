(function() {
    angular.module('socialApp', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria', 'ui.router', 'bm.uiTour', 'angularTreeview'])
        .config(function($mdIconProvider, $mdThemingProvider) {
            $mdIconProvider
                .fontSet('md', 'material-icons');

            var customBlueMap = $mdThemingProvider
                .extendPalette('light-blue', {
                    'contrastDefaultColor': 'light',
                    'contrastDarkColors': ['50'],
                    '50': 'ffffff'
                });
            $mdThemingProvider.definePalette('customBlue', customBlueMap);
            $mdThemingProvider.theme('default')
                .primaryPalette('customBlue', {
                    'default': '500',
                    'hue-1': '50'
                })
                .accentPalette('pink');
            $mdThemingProvider.theme('input', 'default')
                .primaryPalette('grey');
        })
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');

            $stateProvider


            // HOME STATES AND NESTED VIEWS ========================================
                .state('home', {
                url: '/home',
                templateUrl: './view/account.html'
            })

            .state('home2', {
                    url: '/home2',
                    templateUrl: './view/account2.html'
                })
                //    .state('ckeditor', {
                //        url: '/ckeditor',
                //        templateUrl: 'view/ckeditor.html',
                //       controller: 'ckeditorController'
                //   })

            .state('contacts', {
                url: '/contacts',
                templateUrl: './view/contacts.html',
                controller: 'contacts2Controller',
                controllerAs: 'ct'
            })


            .state('assignment', {
                    url: '/assignment',
                    templateUrl: './view/assignment.html',
                    controller: 'ckeditorController',
                    controllerAs: 'ck',
                    css: "./css/app.css"

                })
                .state('backup', {
                    url: '/backup',
                    templateUrl: './view/backup.html'
                })
                .state('bookmark', {
                    url: '/bookmark',
                    templateUrl: './view/bookmark.html'
                })
                .state('description', {
                    url: '/description',
                    templateUrl: './view/description.html'
                })
                .state('dialog', {
                    url: '/dialog',
                    templateUrl: './view/dialog.html'
                })
                .state('dns', {
                    url: '/dns',
                    templateUrl: './view/dns.html'
                })
                .state('extension', {
                    url: '/extension',
                    templateUrl: './view/extension.html'
                });

            /*
            $routeProvider
                .when('/',{
                    templateUrl: './view/account.html'
                })
                .when('/contacts',{
                    templateUrl: './view/contacts.html',
                    controller: function () {
                    },
                    controllerAs: 'ct'
                })
                .when('/assignment',{
                    templateUrl: './view/assignment.html'
                })
                .when('/backup', {
                    templateUrl: './view/backup.html'
                })
                .when('/bookmark', {
                    templateUrl: './view/bookmark.html'
                })
                .when('/description',{
                    templateUrl: './view/description.html'
                })
                .when('/dialog',{
                    templateUrl: './view/dialog.html'
                })
                .when('/dns',{
                    templateUrl: './view/dns.html'
                })
                .when('/extension',{
                    templateUrl: './view/extension.html'
                })
                .otherwise('/');
                */
        })
        .filter('startsWithLetter', function() {
            return function(items, letter) {
                var filtered = [];
                var letterMatch = new RegExp(letter, 'i');
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (letterMatch.test(item.name.substring(0, 1))) {
                        filtered.push(item);
                    }
                }
                return filtered;
            };
        });
})();