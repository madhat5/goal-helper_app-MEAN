angular.module('myApp').factory('AuthService', ['$q', '$timeout', '$http', function ('$q', '$timeout', '$http'){

  // VARIABLES
  var user = null;
  this.$http = $http;
  var self = this;

  return({
    isLoggedIn: isLoggedIn,
    getUserStatus: getUserStatus,
    login: login,
    logout: logout,
    register: register
  });

  this.isLoggedIn = function(){
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  this.getUserStatus = function(){
    return user;
  };

  this.login = function(username, password){

    // explain this
    var deferred = $q.defer();

    self.$http.post('/user/login', {username: username, password: password})

      // SUCCESS
      .success(function (data, status){
        if (status === 200 && data.status){
          user = true;
          deferred.resolve();
        } else {
          user = false;
          deferred.reject();
        }
      })

      // ERROR
      .error(function (data){
        user = false;
        deferred.reject();
      });

    return deferred.promise;

  }; // end of login function

  this.logout = function(){

    var deferred = $q.defer();

    self.$http.get('/user/logout')

      // SUCCESS
      .success(function (data){
        user = false;
        deferred.resolve();
      })

      // ERROR
      .error(function (data){
        user = false;
        deferred.reject();
      });

      return deferred.promise;

  }; // end of logout function

  this.register = function(username, password){

    var deferred = $q.defer();

    self.$http.post('/user/register'm {username: username, password: password})

      // SUCCESS
      .success(function (data, status){
        if (status === 200 && data.status){
          deferred.resolve();
        } else {
          deferred.reject();
        }
      })

      // ERROR
      .error(function (data){
        deferred.reject();
      });

      return deferred.promise;

  }; // end of register function

}]); // end of module


// TEMP STUFF ///////////////////////////////////////////


