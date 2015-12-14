angular.module('myApp', []).directive('ngmyapp', function(){
  return {
    controllerAs: 'loginController',
    controller: ['$http', '$location', 'AuthService', function LoginCtrl('$http', '$location', 'AuthService'){

        this.$http = $http;
        var self = this;

        console.log(AuthService.getUserStatus());

        this.login = function(){

          // SET VALUES
          self.error = false;
          self.disabled = true;

          // LOGIN, FROM SERVICE
          AuthService.login(self.loginForm.username, self.loginForm.password)

            // SUCCESS
            .then(function(){
              $location.path('/');
              self.disabled = false;
              self.loginForm = {};
            })

            // ERROR
            .catch(function (){
              self.error = true;
              self.errorMessage = "There seems to be an issue with your username and/or password";
              self.disabled = false;
              self.loginForm = {};
            });
        }; // end of login function

    }] // end of controller object
  } // end of return
}); // end of module


angular.module('myApp', []).directive('ngmyapp', function(){
  return {
    controllerAs: 'logoutController',
    controller: ['$http', '$location', 'AuthService', function LogoutCtrl('$http', '$location', 'AuthService'){

        this.$http = $http;
        var self = this;

        this.logout = function(){
          console.log(AuthService.getUserStatus());

          // LOGOUT, FROM SERVICE
          AuthService.logout()
            .then(function(){
              $location.path('/login');
            });

        }; // end of logout function

    }] // end of controller object
  } // end of return
}); // end of module
// TEMP STUFF ///////////////////////////////////////////

// LOGOUT
angular.module('myApp').controller('logoutController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    $scope.logout = function () {

      console.log(AuthService.getUserStatus());

      // call logout from service
      AuthService.logout()
        .then(function () {
          $location.path('/login');
        });

    };

}]);

// LOGIN
// angular.module('myApp').controller('loginController',
//   ['$scope', '$location', 'AuthService',
//   function ($scope, $location, AuthService) {

//     console.log(AuthService.getUserStatus());

//     $scope.login = function () {

//       // initial values
//       $scope.error = false;
//       $scope.disabled = true;

//       // call login from service
//       AuthService.login($scope.loginForm.username, $scope.loginForm.password)
//         // handle success
//         .then(function () {
//           $location.path('/');
//           $scope.disabled = false;
//           $scope.loginForm = {};
//         })
//         // handle error
//         .catch(function () {
//           $scope.error = true;
//           $scope.errorMessage = "Invalid username and/or password";
//           $scope.disabled = false;
//           $scope.loginForm = {};
//         });

//     };

// }]);


// REGISTER
angular.module('myApp').controller('registerController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    console.log(AuthService.getUserStatus());

    $scope.register = function () {

      // initial values
      $scope.error = false;
      $scope.disabled = true;

      // call register from service
      AuthService.register($scope.registerForm.username, $scope.registerForm.password)
        // handle success
        .then(function () {
          $location.path('/login');
          $scope.disabled = false;
          $scope.registerForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.registerForm = {};
        });

    };

}]);
