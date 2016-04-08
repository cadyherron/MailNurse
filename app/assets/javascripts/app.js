console.log(angular);
angular.module('mailNurse', ['ngMaterial', 'ui.router', 'restangular', 'ngAnimate'])

.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}])

.config(['$urlRouterProvider', '$stateProvider',
    function($urlRouterProvider, $stateProvider){
      $urlRouterProvider.otherwise('/mail');

      $stateProvider
        .state('mail', {
          url: "/mail",
          abstract: true, 
          controller: 'MailCtrl',
          templateUrl: "/templates/mail.html"
        })
        .state('mail.index', {
          url: '',
          // controller: 'MailCtrl',
          templateUrl: '/templates/mail/index.html',
        })
        .state('mail.compose', {
          url: '/compose',
          // controller: "MailCtrl",
          templateUrl: "/templates/mail/compose.html"
        })
    }])

.factory('_', ['$window', function($window) {
  return $window._;
}]);
