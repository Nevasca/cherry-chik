(function(){
	angular
		.module("gestaoCherry")
		.controller("EnderecadorCtrl", ["$scope", "$sce", "enderecadorService", EnderecadorCtrl]);
	
	function EnderecadorCtrl($scope, $sce, enderecadorService) {							
		
		$scope.novoEnderecador = {endereco: "", tipo: "PAC"};		
		$scope.enderecadores = [];
		
		$scope.limparEnderecador = function() {
			$scope.novoEnderecador = {endereco: "", tipo: "PAC"};
		};
		
		$scope.addEnderecador = function() {
			$scope.novoEnderecador.endereco = $sce.trustAsHtml($scope.novoEnderecador.endereco).toString();
			
			var id = $scope.novoEnderecador.id ? $scope.novoEnderecador.id : null;			
			if(id == null) {
				enderecadorService.salvarEnderecador($scope.novoEnderecador).then(atualizarLista);
			}
			else {
				enderecadorService.salvarEnderecador($scope.novoEnderecador)
			}			
			
			$scope.limparEnderecador();
		};
		
		$scope.editarEnderecador = function(enderecador) {
			
			$scope.novoEnderecador = enderecador;
		};
		
		$scope.deletarEnderecador = function(index) {
			enderecadorService.deletarEnderecador($scope.enderecadores[index].id);
			$scope.enderecadores.splice(index, 1);			
		};
		
		$scope.$watch('novoEnderecador.endereco', function(){
			  $scope.novoEnderecador.endereco = $scope.novoEnderecador.endereco.replace(/\n/g, "<br>");
		});
		
		//Atualiza o array de notas consultando o web service
		function atualizarLista(data) {
			$scope.enderecadores.push(data);
		}
		
	}
}());