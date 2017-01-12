(function() {
    angular.module('socialApp')
        .controller('ckeditorController', function($scope, $timeout, $mdSidenav, $log) {
            $scope.name = "Tree here";
            $scope.contents = [
                { heading: 'Best Book', text: 'HC verma', imageSRC: 'img/a1.jpg' },
                { heading: 'Evening', text: "", imageSRC: 'img/a3.jpg' }
            ];

            initSample();
            $scope.toggleLeft = function() {
                $mdSidenav('left').toggle();
            };
            //--------------------------------------------------------------------
            //   $scope.toggleLeft = buildDelayedToggler();
            $scope.toggleRight = buildToggler('right');
            $scope.isOpenRight = function() {
                return $mdSidenav('right').isOpen();
            };

            /**
             * Supplies a function that will continue to operate until the
             * time is up.
             */
            function debounce(func, wait, context) {
                var timer;

                return function debounced() {
                    var context = $scope,
                        args = Array.prototype.slice.call(arguments);
                    $timeout.cancel(timer);
                    timer = $timeout(function() {
                        timer = undefined;
                        func.apply(context, args);
                    }, wait || 10);
                };
            }

            /**
             * Build handler to open/close a SideNav; when animation finishes
             * report completion in console
             */
            function buildDelayedToggler() {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav('left')
                    .toggle()
                    .then(function() {
                        console.log("toggle " + "left" + " is done");
                    });
            }

            function buildToggler(navID) {
                return function() {
                    // Component lookup should always be available since we are not using `ng-if`
                    $mdSidenav(navID)
                        .toggle()
                        .then(function() {
                            console.log("toggle " + navID + " is done");
                        });
                }
            }

            function close() {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav('left').close()
                    .then(function() {
                        $log.debug("close LEFT is done");
                    });

            }


        });

})();