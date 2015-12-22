(function() {

    'use strict';

    angular.module('ionicApp')

        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('eventmenu', {
                    url: "/event",
                    abstract: true,
                    templateUrl: "templates/event-menu.html"
                })
                .state('eventmenu.home', {
                    url: "/home",
                    views: {
                        'menuContent': {
                            templateUrl: "templates/home.html"
                        }
                    }
                })
                .state('eventmenu.checkin', {
                    url: "/check-in",
                    views: {
                        'menuContent': {
                            templateUrl: "templates/check-in.html",
                            controller: "CheckinCtrl"
                        }
                    }
                })
                .state('eventmenu.attendees', {
                    url: "/attendees",
                    views: {
                        'menuContent': {
                            templateUrl: "templates/attendees.html",
                            controller: "AttendeesCtrl"
                        }
                    }
                })

            $urlRouterProvider.otherwise("/event/home");
        });

})();
