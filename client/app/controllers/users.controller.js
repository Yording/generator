app.controller("loginController",["$scope","$http","$state",function($scope,$http,$state){
    $scope.login = function(){
		if($scope.user!=null){
			$http.post('/app/sessions',$scope.user).success(function (user){
	        	console.log(user);
	        	$state.go('app'); //rediccionar a home de /app/home
		    })
		    .error(function (error, status){
		        $scope.errors=error.errors;
		  	}); 
		}
	};
}]);
app.controller("signupController",["$scope","$http",function($scope,$http){

	$scope.addUser= function(){
		if($scope.user){	
	        $http.post('/app/users', $scope.user).success(function (user){
	        	console.log(user);
	        	$scope.user = {};
	        	$state.go('login');
	        })
	        .error(function (error,status){
	        	// console.log(error,status);
	        	$scope.errors=error.errors;
	        });	        
	    }
	};

}]);