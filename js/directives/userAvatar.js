/**
 * Created by mradul on 26/11/16.
 */
(function(){
    angular.module('socialApp')
        .directive('userAvatar',function (){
            return{
                restrict: 'E',
                templateUrl: './svg/uavatar.svg'
            };
        })
    ;
})();