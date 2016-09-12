app.config(['$stateProvider',function($stateProvider){
	$stateProvider
      .state('login',{
        url: '/login',
        templateUrl: 'core/login',
        controller: 'loginController',
        controllerAs: 'loginCtrl'
      })
      .state('signup',{
        url: '/signup',
        templateUrl: 'core/signup',
        controller: 'signupController',
        controllerAs: 'signCtrl'
      })
}]);