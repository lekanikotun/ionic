(function() {

    'use strict';

    angular.module('ionicApp')

        .controller('CheckinCtrl', function ($scope) {
            $scope.showForm = true;

            $scope.shirtSizes = [
                {text: 'Large', value: 'L'},
                {text: 'Medium', value: 'M'},
                {text: 'Small', value: 'S'}
            ];

            $scope.attendee = {};
            $scope.submit = function () {
                if (!$scope.attendee.firstname) {
                    alert('Info required');
                    return;
                }
                $scope.showForm = false;
                $scope.attendees.push($scope.attendee);
            };

        });

})();