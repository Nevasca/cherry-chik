(function(){
	
	angular
		.module("gestaoCherry")
		.controller("ProdutoCadastroCtrl", ["$scope", "produto", "produtoService", ProdutoCadastroCtrl]);
	
	function ProdutoCadastroCtrl($scope, produto, produtoService) {
		
		$scope.produto = produto;
		
		$scope.cadastrarProduto = function() {
			produtoService.cadastrarProduto($scope.produto).then(atualizarProduto);
		};
		
		function atualizarProduto(data) {
			$scope.produto = data;
		}
		
	}
	
}());