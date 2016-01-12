(function() {

    'use strict';

    angular.module('ionicApp')

        .factory("Authentication", ['$rootScope', '$firebaseAuth', 'FIREBASE_URL', '$location', '$q', function($rootScope, $firebaseAuth, FIREBASE_URL, $location, $q) {

            var ref = new Firebase(FIREBASE_URL);
            var auth = $firebaseAuth(ref);

            return {
                login: function(user) {
                    var deferred = $q.defer();

                    auth.$authWithPassword({
                        email: user.email,
                        password: user.password
                    }).then(function(d) {
                        deferred.resolve(d);
                        $location.path('/event/home')
                    }).catch(function(error) {
                        deferred.reject(error);
                    });

                    return deferred.promise;
                },
                register: function(user) {
                    var self = this;
                    var deferred = $q.defer();

                    auth.$createUser({
                        email: user.email,
                        password: user.password
                    }).then(function(d) {
                        var useObj = {
                            userId: d.uid,
                            firstname: user.firstname,
                            lastname: user.lastname,
                            email: user.email,
                            date: Firebase.ServerValue.TIMESTAMP
                        }
                        self.save(d.uid, useObj);
                        deferred.resolve(d);
                    }).catch(function(error) {
                        deferred.reject(error);
                    });

                    return deferred.promise;
                },

                save: function (id, data) {
                    var deferred = $q.defer();
                    var ref = new Firebase(FIREBASE_URL + 'users').child(id);

                    ref.set(data, function(error) {
                        if(error)
                            deferred.reject(error);
                        else {
                            deferred.resolve("user saved");
                        }

                    });
                },

                getUser: function (userID, userData) {
                    var ref = new Firebase(FIREBASE_URL + 'users');

                    ref.child(userID).set({
                        userId: userID,
                        firstname: userData.firstname,
                        lastname: userData.lastname,
                        email: userData.email,
                        date: Firebase.ServerValue.TIMESTAMP
                    });
                }
            };
        }])
})();