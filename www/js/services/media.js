(function() {
    'use strict';

    angular
        .module('ionicApp')
        .factory('MediaApi', apiFactory);

    apiFactory.$inject = ['$http'];

    function apiFactory($http) {

        function getMediaList() {
            return $http.get('http://localhost:3000/media/audio/listings')
                .then(function(response) {
                    return response.data;
                });
        }

        function getMediaDetails(audioId) {
            return $http.get('http://localhost:3000/media/audio/listings' + audioId)
                .then(function(response) {
                    return response.data;
                });
        }

        return {
            getMediaList: getMediaList,
            getMediaDetails: getMediaDetails
        };
    }

}());