(function(){
	
	var app = angular.module("gestaoCherry", ["ui.router",
	                                          "common.services",
	                                          "ngSanitize",
	                                          "angularCharts"]); //,"notaResourceMock"
	
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
						.state("enderecadorAdicionar", {
							url: "/enderecadorAdicionar",
							templateUrl: "app/enderecador/enderecadorView.html",
							controller: "EnderecadorCtrl"
						})
						.state("enderecadorConsultar", {
							url: "/enderecadorConsultar",
							templateUrl: "app/enderecador/enderecadorConsultaView.html",
							controller: "EnderecadorConsultaCtrl",
							resolve: {
								enderecadorService: "enderecadorService",
								enderecadores: function(enderecadorService) {
									return enderecadorService.listarEnderecadores();
								}
							}
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
						})
						.state("produtoCadastro", {
							url: "/produtoCadastro/:id",
							templateUrl: "app/produto/produtoCadastroView.html",
							controller: "ProdutoCadastroCtrl",
							resolve : {
								produtoService: "produtoService",
								produto: function(produtoService, $stateParams) {
									var id = $stateParams.id;						
									return produtoService.buscarPorId(id);
								} 
							}
						})
						.state("produtoConsulta", {
							url: "/produtoConsulta",
							templateUrl: "app/produto/produtoConsultaView.html",
							controller: "ProdutoConsultaCtrl",
							resolve: {
								produtoService: "produtoService",
								produtos: function(produtoService) {
									return produtoService.listarProdutos();
								}
							}
						})
						.state("pedidoNovo", {
							url: "/pedidoNovo/:id",
							templateUrl: "app/pedido/pedidoNovoView.html",
							controller: "PedidoNovoCtrl",
							resolve: {
								produtoService: "produtoService",
								pedidoService: "pedidoService",
								produtos: function(produtoService) {
									return produtoService.listarProdutos();
								},
								pedido : function(pedidoService, $stateParams) {
									var id = $stateParams.id;						
									return pedidoService.buscarPorId(id);
								}
								
							}
						})
						.state("pedidoConsulta", {
							url: "/pedidoConsulta",
							templateUrl: "app/pedido/pedidoConsultaView.html",
							controller: "PedidoConsultaCtrl",
							resolve: {
								pedidoService: "pedidoService",
								pedidos: function(pedidoService) {
									return pedidoService.listarPedidos();
								}
							}
						})
						.state("enderecadorRelatorio", {
							url: "/enderecadorRelatorio",
							templateUrl: "app/enderecador/enderecadorRelatorioView.html",
							controller: "EnderecadorRelatorioCtrl",
							resolve: {
								enderecadorService: "enderecadorService",
								relatorio: function(enderecadorService) {
									return enderecadorService.relatorio();
								}
							}
						})
						.state("pedidoRelatorio", {
							url: "/pedidoRelatorio",
							templateUrl: "app/pedido/pedidoRelatorioView.html",
							controller: "PedidoRelatorioCtrl",
							resolve: {
								pedidoService: "pedidoService",
								relatorio: function(pedidoService) {
									return pedidoService.relatorio();
								}
							}
						});	
		
	}]);
	
	//Configuracoes padroes do popup de aviso
	toastr.options = {
		closeButton: true, 
		positionClass: "toast-top-center",
		timeOut: 2000
	};
	
}());