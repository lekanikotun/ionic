(function() {

    'use strict';

    angular.module('ionicApp')

        .controller('AttendeesCtrl', function ($scope) {

            $scope.activity = [];
            $scope.arrivedChange = function (attendee) {
                var msg = attendee.firstname + ' ' + attendee.lastname;
                msg += (!attendee.arrived ? ' has arrived, ' : ' just left, ');
                msg += new Date().getMilliseconds();
                $scope.activity.push(msg);
                if ($scope.activity.length > 3) {
                    $scope.activity.splice(0, 1);
                }
            };

        });

})();