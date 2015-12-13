var myApp = angular.module('myApp', [ngRoute]);

myApp.config(function ($routeProvider){
  $routeProvider
    .when('/', {templateUrl: 'partials/home.html'})
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginController',
      access: {restricted: false}
    })
    .when('/logout', {
      controller: 'logoutController',
      access: {restricted: true}
    })
    .when('/register', {
      templateUrl: 'partials/register.html',
      controller: 'registerController',
      access: {restricted: false}
    })
    .when('/one', {
      template: '<h1>Open Sesami - Page 1<h1>',
      access: {restricted: true} // explain this .when??
    })
    .when('/two', {
      template: '<h1>Open Sesami - Page 2<h1>'
      access: {restricted: false} // explain this .when??
    })
    .otherwise ({redirectTo: '/'}); // explain this??
});

myApp.run(function ($rootScope, $location, $route, AuthService){
  $rootScope.$on('$routeChangeStart', function (event, next, current){
    if (next.access.restricted && AuthService.isLoggedIn() === false){
      $location.path('/login');
    }
  });
});

// TEMP STUFF ///////////////////////////////////////////
