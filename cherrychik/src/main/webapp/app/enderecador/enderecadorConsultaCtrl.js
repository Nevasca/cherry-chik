(function(){
	
	angular
		.module("gestaoCherry")
		.controller("EnderecadorConsultaCtrl", ["$scope", "enderecadores", "enderecadorService", EnderecadorConsultaCtrl]);
	
	function EnderecadorConsultaCtrl($scope, enderecadores, enderecadorService) {
		
		$scope.enderecadores = enderecadores;
		$scope.viewEnderecador = {};
		$scope.enderecadorBusca = {};
		
		var indexDel = 0;
		
		$scope.deletarEnderecador = function(index) {
			indexDel = index;			
			enderecadorService.deletarEnderecador($scope.enderecadores[index].id).then(removerDaLista, mensagemErroExcluir);			
		};
		
		function removerDaLista() {
			toastr.success("Endereçador excluído");
			$scope.enderecadores.splice(indexDel, 1);
		}
		
		$scope.visualizarEnderecador = function(enderecador) {
			$scope.viewEnderecador = enderecador;
		};
		
		$scope.pesquisarEnderecador = function() {
			
			//Se foi digitado algo no campo de busca, pesquisar com a data
			if($scope.enderecadorBusca.data) {
				enderecadorService.listarEnderecadoresPorData($scope.enderecadorBusca.data).then(atualizarLista);
			}
			else { //Caso contrário, pesquisar todos
				enderecadorService.listarEnderecadores().then(atualizarLista);
			}
		};
		
		function atualizarLista(data) {			
			$scope.enderecadores = data;
		}
		
		function mensagemSucesso() {
			toastr.success("Excluído!");
		}
		
		function mensagemErroExcluir() {
			toastr.error("Não foi possível excluir o endereçador","Erro");
		}
		
		function mensagemErroConsulta() {
			toastr.error("Ocorreu um erro ao consultar o endereçador","Erro");
		}
	}
	
}());