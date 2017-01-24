(function() {
    angular.module('socialApp')
        .controller('bookmarkController', ['$scope', '$location', function($scope, $location) {

            $scope.isSelected = 1;
            $scope.setSelected = function(itemNumber) {
                $scope.isSelected = itemNumber;
            }
            $scope.disablePrevFunc = function() {
                var path = $location.path();
                if (path == '/bookmark/emailVerification') {
                    return true;
                } else
                    return false;
            }
            $scope.disableNextFunc = function() {
                var path = $location.path();
                if (path == '/bookmark/phone')
                    return true;
                else
                    return false;
            }
            $scope.nextPage = function() {
                var path = $location.path();
                console.log(path);
                if (path == '/bookmark/emailVerification') {
                    $scope.isSelected = 2;
                    $location.path('/bookmark/passwordReset');
                } else if (path == '/bookmark/passwordReset') {
                    $scope.isSelected = 3;
                    $location.path('/bookmark/emailChange')
                } else if (path == '/bookmark/emailChange') {
                    $scope.isSelected = 4;
                    $location.path('/bookmark/contacts')
                } else if (path == '/bookmark/contacts') {
                    $scope.isSelected = 5;
                    $location.path('/bookmark/phone')
                }
            }
            $scope.prevPage = function() {
                var path = $location.path();
                console.log(path);
                if (path == '/bookmark/passwordReset') {
                    $scope.isSelected = 1;
                    $location.path('/bookmark/emailVerification');
                } else if (path == '/bookmark/emailChange') {
                    $scope.isSelected = 2;
                    $location.path('/bookmark/passwordReset');
                } else if (path == '/bookmark/contacts') {
                    $scope.isSelected = 3;
                    $location.path('/bookmark/emailChange')
                } else if (path == '/bookmark/phone') {
                    $scope.isSelected = 4;
                    $location.path('/bookmark/contacts')
                }
            }

        }]);
})();