app.controller("loginController",["$scope","$http",function($scope,$http){
	$http.get('/app/users').then(products=>{
    	// $scope.products=products.data;
    	console.log(products.data);
    });
}]);
app.controller("signupController",["$scope","$http",function($scope,$http){

	$scope.addUser= function(){
		if($scope.user){	
	        $http.post('/app/users', $scope.user).then(function(user){
	        	console.log(user);
	        	$scope.user = {};
	        });
	        
	    }
	};
}]);