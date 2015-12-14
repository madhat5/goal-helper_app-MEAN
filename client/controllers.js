// LOGIN
angular.module('myApp', []).directive('ngmyapp', function(){
  return {
    controllerAs: 'loginController',
    controller: ['this', '$location', 'AuthService', function LoginCtrl('this', '$location', 'AuthService'){

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

// LOGOUT
angular.module('myApp', []).directive('ngmyapp', function(){
  return {
    controllerAs: 'logoutController',
    controller: ['this', '$location', 'AuthService', function LogoutCtrl('this', '$location', 'AuthService'){

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

// REGISTRATION
angular.module('myApp', []).directive('ngmyapp', function(){
  return {
    controllerAs: 'registrationController',
    controller: ['this', '$location', 'AuthService', function RegisterCtrl('this', '$location', 'AuthService'){

        console.log(AuthService.getUserStatus());

        var self = this;

        this.register = function(){

          // VALUE SET
          self.error = false;
          self.disbled = true;

          // REGISTER, FROM SERVICE
          AuthService.register(self.registerForm.username, self.registerForm.password)

            // SUCCESS
            .then(function(){
              $location.path('/login');
              self.disabled = false;
              self.registerForm = {};
            })

            // ERROR
            .catch(function(){
              self.error = true;
              self.errorMessage = "D'OH!! Homer (Nuclear Safety Inspector) says something went wrong";
              self.disabled = false;
              self.registrationForm = {};
            });

        }; // end of register function

    }] // end of controller object
  } // end of return
}); // end of module

// TEMP STUFF ///////////////////////////////////////////

