(function(){
	
	angular
		.module("gestaoCherry")
		.controller("ProdutoCadastroCtrl", ["$scope", "produto", "produtoService", ProdutoCadastroCtrl]);
	
	function ProdutoCadastroCtrl($scope, produto, produtoService) {
		
		$scope.produto = produto;
		
		$scope.cadastrarProduto = function() {
			$scope.produto.preco = $scope.produto.preco.replace(',', '.');	
			if(isNaN($scope.produto.preco || $scope.produto.preco <= 0)) {
				toastr.error("Digite um preço válido", "Preço Inválido");				
			}
			else {
				produtoService.cadastrarProduto($scope.produto).then(atualizarProduto, mensagemErro);
			}
			
		};
		
		function atualizarProduto(data) {
			toastr.success("Produto cadastrado com sucesso!", "Cadastrado");
			$scope.produto = data;
		}
		
		function mensagemErro() {
			toastr.error("Não foi possível cadastrar","Erro");
		}
		
	}
	
}());