(function(){
	
	angular
		.module("gestaoCherry")
		.controller("DescricaoMontarCtrl", ["$scope", "descricoes", "$sce", DescricaoMontarCtrl]);
	
	function DescricaoMontarCtrl($scope, descricoes, $sce) {
		$scope.descricoes = descricoes;
		$scope.novaDescricao = {};
		
		$scope.cores = [{
				nome: "Rosa",
				codigo: "FF008E"
			},
			{
				nome: "Preto",
				codigo: "000000"
			}
		
		];
		//$scope.novaDescricao.template = $scope.descricoes[$scope.novaDescricao.index];
	}
	
}());