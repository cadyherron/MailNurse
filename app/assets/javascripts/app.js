console.log(angular);
angular.module('mailNurse', ['ngMaterial', 'ui.router', 'restangular', ])

.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}])

.config(['$urlRouterProvider', '$stateProvider',
    function($urlRouterProvider, $stateProvider){
      $urlRouterProvider.otherwise('/mail');

      $stateProvider
        .state('mail', {
          url: '/mail',
          controller: 'MailCtrl',
          templateUrl: '/templates/mail.html',
        });
    }])

.factory('_', ['$window', function($window) {
  return $window._;
}]);
