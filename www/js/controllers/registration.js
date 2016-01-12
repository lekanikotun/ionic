(function() {

    'use strict';

    angular.module('ionicApp')

        .controller('RegistrationCtrl', ['$scope', 'Authentication', function ($scope, Authentication) {

            var self = this;

            self.message = "This is a message";

            self.register = function() {
                Authentication.register(self.user).then(function(data) {
                    self.message = "Hi, "  + self.user.firstname;
                    console.log(data);
                    return data;
                }, function(error) {
                    self.message = error.message;
                });
            };

        }]);

})();