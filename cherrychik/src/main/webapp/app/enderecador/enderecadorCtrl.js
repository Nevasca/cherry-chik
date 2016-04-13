(function(){
	angular
		.module("gestaoCherry")
		.controller("EnderecadorCtrl", ["$scope", "$sce", "notaService", EnderecadorCtrl]);
	
	function EnderecadorCtrl($scope, $sce, notaService) {							
		
		$scope.novoEnderecador = {endereco: "", tipo: "PAC"};			
		
		$scope.enderecadores = [];
		
		$scope.limparEnderecador = function() {
			$scope.novoEnderecador = {endereco: "", tipo: "PAC"};
		};
		
		$scope.addEnderecador = function() {
			$scope.novoEnderecador.endereco = $sce.trustAsHtml($scope.novoEnderecador.endereco);
			if(!$scope.novoEnderecador.id) {
				if($scope.enderecadores.length > 0) {
					$scope.novoEnderecador.id = $scope.enderecadores[$scope.enderecadores.length - 1].id + 1;
				}
				else {
					$scope.novoEnderecador.id = 1;
				}				
				$scope.enderecadores.push($scope.novoEnderecador);
			}
			
			$scope.limparEnderecador();
		};
		
		$scope.editarEnderecador = function(enderecador) {
			
			$scope.novoEnderecador = enderecador;
		};
		
		$scope.deletarEnderecador = function(index) {													
			$scope.enderecadores.splice(index, 1);				
		};
		
		$scope.$watch('novoEnderecador.endereco', function(){
			  $scope.novoEnderecador.endereco = $scope.novoEnderecador.endereco.replace(/\n/g, "<br>");
		});
		
	}
	
}());