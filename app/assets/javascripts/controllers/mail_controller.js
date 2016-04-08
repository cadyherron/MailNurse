angular.module('mailNurse')
.controller('MailCtrl', ['$scope', '$sce', 'Restangular', '$mdDialog', '$window', '$state', function($scope, $sce, Restangular, $mdDialog, $window, $state) {

  $scope.loading = true;

  $scope.showEmail = function(ev, email, index) {
     $mdDialog.show({
      template: '<md-dialog><md-toolbar><div class="md-toolbar-tools">{{email.subject}}<span flex></span><md-button class="md-icon-button" ng-click="close()"><md-icon>close</md-icon></md-button></div></md-toolbar><md-content layout-padding><div ng-bind-html="email.body"></div></md-content></md-dialog>',
      targetEvent: ev,
      locals: {
        email: email
      },
      clickOutsideToClose:true,
      controller: DialogController
     });
  };
  function DialogController($scope, $mdDialog, email) {
    $scope.email = email;
    $scope.close = function() {
      $mdDialog.hide();
    }
  }

  $scope.refresh = function() {
    $scope.loading = true;
    Restangular.all('emails').getList().then(function(emails) {
      $scope.emails = emails.map(function(email) {
        email.body = $sce.trustAsHtml(email.body);
        return email;
      });
      $scope.loading = false;
    });
  }


  $scope.newEmail = {email : {to: null, subject: null, body: null}};


  $scope.sendEmail = function() {
    Restangular.all('emails').post($scope.newEmail).then(function() {
      $state.go('mail.index')
      $scope.newEmail = {};
    });
  }


  $scope.refresh();
}]);
