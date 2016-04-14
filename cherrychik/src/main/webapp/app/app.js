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
						})
						.state("descricao", {
							url: "/descricao",
							templateUrl: "app/descricao/descricaoView.html",
							controller: "DescricaoCtrl",
							resolve: {
								descricaoService: "descricaoService",
								descricoes: function(descricaoService) {
									return descricaoService.listarDescricoes();
								}
							}
						})
						.state("descricaoMontar", {
							url: "/descricao.montar",
							templateUrl: "app/descricao/descricaoMontarView.html",
							controller: "DescricaoMontarCtrl",
							resolve: {
								descricaoService: "descricaoService",
								descricoes: function(descricaoService) {
									return descricaoService.listarDescricoes();
								}
							}
						});	
		
	}]);
	
	
	
}());