(function(){
	
	var app = angular.module("gestaoCherry", ["ui.router",
	                                          "common.services",
	                                          "notaResourceMock"]);
	
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
								notaResource: "notaResource",
								notas: function(notaResource) {
									return notaResource.query(function(response) {
										
									},
									function(response) {
										if(response.status == 404) {
											alert("Servidor não encontrado: " + response.config.method + " " + response.config.url);;
										}
										else
										{
											alert(response.statusText);
										}
									}).$promise;
								}
							}
						});
		
	}]);
	
	
	
}());