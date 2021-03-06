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


            $scope.messages = [{
                face: "././img/a1.jpg",
                name: 'Brian Olson',
                message: 'Then it got down off the top',
                time: '5 day ago'
            }, {
                face: "././img/a2.jpg",
                name: 'Vivien Sauer',
                message: 'Duchess, as pigs have to',
                time: '5 day ago'
            }, {
                face: "././img/a3.jpg",
                name: 'Ruby Shield',
                message: 'She tooks down a good',
                time: '5 day ago'
            }, {
                face: "././img/a4.jpg",
                name: 'Kitty Heller DVM',
                message: 'I could shut up like a',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }];

            $scope.notification_title = [{
                    title: 'Twitter'
                },
                {
                    title: 'Server'
                },
                {
                    title: 'Sales'
                }
            ];
            $scope.notifications = [{
                title_name: 'Twitter',
                title_icon: '././img/twitter.png',
                message: 'Mention from oxygen',
                time: 'an hour ago'
            }, {
                title_name: 'Twitter',
                title_icon: '././img/twitter.png',
                message: 'Oxygenna',
                time: 'an hour ago'
            }, {
                title_name: 'Twitter',
                title_icon: '././img/twitter.png',
                message: 'Oxygenna',
                time: 'an hour ago'
            }, {
                title_name: 'Twitter',
                title_icon: '././img/twitter.png',
                message: 'Followed by Oxygenna',
                time: 'an hour ago'
            }, {
                title_name: 'Server',
                title_icon: '././img/server_down.png',
                message: 'Server Down',
                time: 'an hour ago'
            }, {
                title_name: 'Server',
                title_icon: '././img/server_slow.png',
                message: 'Slow Response Time',
                time: 'an hour ago'
            }, {
                title_name: 'Server',
                title_icon: '././img/server_down.png',
                message: 'Server Down',
                time: 'an hour ago'
            }, {
                title_name: 'Sales',
                title_icon: '././img/shop_cart.png',
                message: 'Triangular Admin $21',
                time: 'an hour ago'
            }, {
                title_name: 'Sales',
                title_icon: '././img/shop_cart.png',
                message: 'Triangular Admin $21',
                time: 'an hour ago'
            }, {
                title_name: 'Sales',
                title_icon: '././img/shop_cart.png',
                message: 'Lambda WordPress',
                time: 'an hour ago'
            }, {
                title_name: 'Sales',
                title_icon: '././img/shop_cart.png',
                message: 'Triangular Admin $21',
                time: 'an hour ago'
            }];

            $scope.switch = {
                cb1: true,
                cb2: '',
                cb3: '',

            };

            $scope.statistics = {
                storage_space: 60,
                bandwidth_usage: 20,
                memory_usage: 100,
                storage_space_server: 80,
                bandwidth_usage_server: 50,
                memory_usage_server: 100,

            }


        }]);
})();