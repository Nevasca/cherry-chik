(function(){
	
	angular
		.module("gestaoCherry")
		.controller("ProdutoConsultaCtrl", ["$scope", "produtos", "produtoService", ProdutoConsultaCtrl]);
	
	function ProdutoConsultaCtrl($scope, produtos, produtoService) {
		
		$scope.produtos = produtos;
		
		$scope.deletarProduto = function(index) {
			produtoService.excluirProduto($scope.produtos[index].id);
			$scope.produtos.splice(index, 1);
		};				
	}
	
}());