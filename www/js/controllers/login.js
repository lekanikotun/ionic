(function() {

    'use strict';

    angular.module('ionicApp')

        .controller('LoginCtrl', ['$scope', 'Authentication', 'MediaApi', function ($scope, Authentication, MediaApi) {

            var self = this;

            MediaApi.getMediaList().then(function(data) {
                console.log('Media List: ', data);
            });


            self.login = function() {
                Authentication.login(self.user).then(function(r) {
                    console.log(r);
                });
            };

            self.logout = function() {
                Authentication.logout();
            };
        }]);

})();