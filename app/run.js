module.exports = ['$rootScope', '$state', function($rootScope, $state) {

    $rootScope.go = function(state) {
        $state.go(state);
    }

}];