(function(){
	
	angular
		.module("gestaoCherry")
		.controller("EnderecadorConsultaCtrl", ["$scope", "enderecadores", "enderecadorService", EnderecadorConsultaCtrl]);
	
	function EnderecadorConsultaCtrl($scope, enderecadores, enderecadorService) {
		
		$scope.enderecadores = enderecadores;
		$scope.viewEnderecador = {};
		$scope.buscaEnderecador = {};
		
		$scope.deletarEnderecador = function(index) {
			enderecadorService.deletarEnderecador($scope.enderecadores[index].id);
			$scope.enderecadores.splice(index, 1);
		};
		
		$scope.visualizarEnderecador = function(enderecador) {
			$scope.viewEnderecador = enderecador;
		};
		
		$scope.filtrarEnderecador = function() {
			
			if($scope.buscaEnderecador.pedido) {			
				enderecadorService.pesquisarEnderecador($scope.buscaEnderecador).then(atualizarLista);
			}
			else {
				enderecadorService.listarEnderecadores().then(atualizarLista);
			}
		};
		
		function atualizarLista(data) {
			$scope.enderecadores = data;
		}
	}
	
}());