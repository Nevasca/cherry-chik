(function(){
	angular
		.module("gestaoCherry")
		.controller("EnderecadorCtrl", ["$scope", "$sce", "enderecadorService", EnderecadorCtrl]);
	
	function EnderecadorCtrl($scope, $sce, enderecadorService) {							
		
		$scope.novoEnderecador = {endereco: "", tipo: "PAC"};		
		$scope.enderecadores = [];
		
		var indexDel = 0;
		
		$scope.limparEnderecador = function() {
			$scope.novoEnderecador = {endereco: "", tipo: "PAC"};
		};
		
		$scope.addEnderecador = function() {
			$scope.novoEnderecador.endereco = $sce.trustAsHtml($scope.novoEnderecador.endereco).toString();
			
			var id = $scope.novoEnderecador.id ? $scope.novoEnderecador.id : null;			
			if(id == null) {
				enderecadorService.salvarEnderecador($scope.novoEnderecador).then(atualizarLista, mensagemErroSalvar);
			}
			else {
				enderecadorService.salvarEnderecador($scope.novoEnderecador).then(mensagemSucesso, mensagemErroSalvar);
			}			
			
			$scope.limparEnderecador();
		};
		
		$scope.editarEnderecador = function(enderecador) {
			
			$scope.novoEnderecador = enderecador;
		};
		
		$scope.deletarEnderecador = function(index) {
			indexDel = index;			
			enderecadorService.deletarEnderecador($scope.enderecadores[index].id).then(removerDaLista, mensagemErroExcluir);				
		};
		
		function removerDaLista() {
			toastr.success("Endereçador excluído");
			$scope.enderecadores.splice(indexDel, 1);
		}
		
		$scope.$watch('novoEnderecador.endereco', function(){
			  $scope.novoEnderecador.endereco = $scope.novoEnderecador.endereco.replace(/\n/g, "<br>");
		});
		
		//Atualiza o array de enderecadores consultando o web service
		function atualizarLista(data) {
			mensagemSucesso();
			$scope.enderecadores.push(data);
		}
		
		function mensagemSucesso() {
			toastr.success("Salvo!");
		}
		
		function mensagemErroSalvar() {
			toastr.error("Não foi possível salvar o endereçador","Erro");
		}
		
		function mensagemErroExcluir() {
			toastr.error("Não foi possível excluir o endereçador","Erro");
		}					
	}
}());