(function(){
	angular
		.module("gestaoCherry")
		.controller("EnderecadorCtrl", ["$scope", "$sce", EnderecadorCtrl]);
	
	function EnderecadorCtrl($scope, $sce) {
		
		$scope.novoEnderecador = {endereco: "", tipo: "PAC"};			
		
		$scope.enderecadores = [];
		
		$scope.limparEnderecador = function() {
			$scope.novoEnderecador = {endereco: "", tipo: "PAC"};
		};
		
		$scope.addEnderecador = function() {
			$scope.novoEnderecador.endereco = $sce.trustAsHtml($scope.novoEnderecador.endereco);
			$scope.enderecadores.push($scope.novoEnderecador);
			$scope.limparEnderecador();
		};
		
		$scope.$watch('novoEnderecador.endereco', function(){
			  $scope.novoEnderecador.endereco = $scope.novoEnderecador.endereco.replace(/\n/g, "<br>");
		});
		
	}
	
}());