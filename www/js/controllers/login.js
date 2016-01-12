(function() {

    'use strict';

    angular.module('ionicApp')

        .controller('LoginCtrl', ['$scope', 'Authentication', function ($scope, Authentication) {

            var self = this;

            self.login = function() {
                Authentication.login(self.user).then(function(r) {
                    console.log(r);
                });
            };
        }]);

})();