app.config(['$stateProvider',function($stateProvider){
	$stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home',
        controller: 'mainController',
        controllerAs: 'mainCtrl'
      })
      .state('app',{
      	url:'/app',
      	templateUrl: 'app/index'
      }) 
   
}]);