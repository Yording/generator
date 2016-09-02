app.config(['$stateProvider',function($stateProvider){
	$stateProvider
      .state('login',{
        url: '/login',
        templateUrl: 'login',
        controller: 'loginController',
        controllerAs: 'loginCtrl'
      })
      .state('signup',{
        url: '/signup',
        templateUrl: 'signup',
        controller: 'signupController',
        controllerAs: 'signCtrl'
      });
}]);