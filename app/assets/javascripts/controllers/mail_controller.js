angular.module('mailNurse')
.controller('MailCtrl', ['$scope', '$mdDialog', '$window', function($scope, $mdDialog, $window) {
  $scope.emails = [];
  for (var i = 0; i < 15; i++) {
    $scope.emails.push({
      subject: "Brunch this weekend?",
      from: "Min Li Chan",
      preview: "I'll be in your neighborhood doing errands."
    });
  }
}]);
