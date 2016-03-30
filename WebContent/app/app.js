(function(){
	
	var app = angular.module("gestaoCherry", ["ui.router"]);
	
	app.config(["$stateProvider", "$urlRouterProvider",
	            function($stateProvider, $urlRouterProvider) {
					$urlRouterProvider.otherwise("/");
					
					$stateProvider
						.state("home", {
							url: "/",
							templateUrl: "app/homeView.html"
						})
						.state("notas", {
							url: "/notas",
							templateUrl: "app/notas/notasView.html",
							controller: "NotasCtrl"
						});
		
	}]);
	
	
	
}());