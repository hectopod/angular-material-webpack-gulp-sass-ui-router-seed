'use strict';

angular.module('myApp.view2', ['ui.router'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('view2', {
                url: '/view2',
                template: require('./view2.html'),
                controller: 'View2Ctrl'
            });
    }])

    .controller('View2Ctrl', [function () {

    }]);

module.exports = 'myApp.view2';