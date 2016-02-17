(function() {

    'use strict';

    angular.module('ionicApp')

        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('tabs', {
                    url: "/event",
                    abstract: true,
                    templateUrl: "templates/event-menu.html"
                })
                .state('tabs.home', {
                    url: "/home",
                    views: {
                        'menuContent': {
                            templateUrl: "templates/home.html"
                        }
                    }
                })
                .state('tabs.checkin', {
                    url: "/check-in",
                    views: {
                        'menuContent': {
                            templateUrl: "templates/check-in.html",
                            controller: "CheckinCtrl"
                        }
                    },
                    resolve: {
                        currentAuth: function(Authentication) {
                            return Authentication.requireAuth();
                        }
                    }
                })
                .state('tabs.attendees', {
                    url: "/attendees",
                    views: {
                        'menuContent': {
                            templateUrl: "templates/attendees.html",
                            controller: "AttendeesCtrl"
                        }
                    }
                })
                .state('tabs.login', {
                    url: "/login",
                    views: {
                        'menuContent': {
                            templateUrl: "templates/login.html",
                            controller: "LoginCtrl",
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('tabs.logout', {
                    url: "/logout",
                    views: {
                        'menuContent': {
                            templateUrl: "templates/logout.html"
                        }
                    },
                    resolve: {
                        logout: function(Authentication) {
                            return Authentication.logout();
                        }
                    }
                })
                .state('tabs.register', {
                    url: "/register",
                    views: {
                        'menuContent': {
                            templateUrl: "templates/register.html",
                            controller: "RegistrationCtrl",
                            controllerAs: 'vm'
                        }
                    }
                })

            $urlRouterProvider.otherwise("/event/home");
        });

})();
