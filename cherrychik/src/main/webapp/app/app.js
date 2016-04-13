(function(){
	
	var app = angular.module("gestaoCherry", ["ui.router",
	                                          "common.services",
	                                          "ngSanitize"]); //,"notaResourceMock"
	
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
							controller: "NotasCtrl",
							resolve: {
								
								notaService: "notaService",
								notas: function(notaService) {
									return notaService.listarNotas();
								}
							}
						})
						.state("enderecador", {
							url: "/enderecador",
							templateUrl: "app/enderecador/enderecadorView.html",
							controller: "EnderecadorCtrl"
						});
		
	}]);
	
	
	
}());