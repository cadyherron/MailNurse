angular.module('mailNurse')
.controller('MailCtrl', ['$scope', '$sce', 'emails', '$mdDialog', '$window', function($scope, $sce, emails, $mdDialog, $window) {
  $scope.emails = [];
  console.log(emails);
  $scope.emails = emails.map(function(email) {
    email.body = $sce.trustAsHtml(email.body);
    return email;
  });

  $scope.showEmail = function(ev, email) {
     $mdDialog.show({
      template: '<md-dialog><md-toolbar><div class="md-toolbar-tools">{{email.subject}}<span flex></span><md-button class="md-icon-button" ng-click="close()"><md-icon>close</md-icon></md-button></div></md-toolbar><md-content layout-padding><iframe srcdoc="{{email.body}}" scrolling="no" onload="resizeIframe(this)" frameborder="0" width="800px" height="1500px" flex></iframe></md-content></md-dialog>',
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
}]);

function resizeIframe(obj){
  obj.style.height = 0;
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}
