(function(){
    'use strict';

    angular
        .module('app.services', [
            'app.services.userservice',
            'app.services.autheninterceptorservice'
        ]);

}());