(function() {

    'use strict';

    angular.module('ionicApp', ['ionic', 'firebase'])
        .constant('FIREBASE_URL', 'https://mediaintel.firebaseio.com/')
        .constant('ApiEndpoint', 'http://localhost:3000/listings')
        .run(['$rootScope', '$ionicPlatform', '$location', function($rootScope, $ionicPlatform, $location) {
            $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }


                $rootScope.$on('$routeChangeError', function(event, next, prev, error) {
                    if (error === 'AUTH_REQUIRED') {
                        $rootScope.message = 'Sorry you must login to accesss the page';
                        $location.path('/login');
                    }
                })
            });
        }])


})();