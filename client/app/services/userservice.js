(function () {
    'use strict';

    angular
        .module('app.services.userservice', [])
        .factory('userService', userService)

    /** @ngInject */
    function userService($http, $q, $cookies, $window) {
        var services = {
            login: login,
            register: register,
            authentication: authentication,
            logout: logout, 
            getUserInfo: getUserInfo,
            isAuthenticate: isAuthenticate
        };
        return services;

        function isAuthenticate() {
            if ($window.sessionStorage.token && $window.sessionStorage.email) {
                return true;
            }
            return false;
        }

        function getUserInfo(email) {
            var deferred = $q.defer();
            $http
                .get('/api/users/' + email)
                .then(function success(response) {
                    console.log(response);
                }, function error(error) {
                    console.log(error);
                });
            return deferred.promise;
        }

        function login(data) {
            var deferred = $q.defer();
            $http
                .post('/api/authenticate', data)
                .then(function success(response) {
                    if (response.data.success) {
                        $window.sessionStorage.token = response.data.token;
                        $window.sessionStorage.email = data.email;
                    }
                    deferred.resolve(response.data);
                }, function error(error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        }

        function register() {
            var deferred = $q.defer();
            return deferred.promise;
        }

        function authentication() {
            var deferred = $q.defer();
            return deferred.promise;
        }

        function logout() {
            var deferred = $q.defer();
            delete $window.sessionStorage.token;
            delete $window.sessionStorage.email;
            deferred.resolve({success: true});
            return deferred.promise;
        }

    }

}());