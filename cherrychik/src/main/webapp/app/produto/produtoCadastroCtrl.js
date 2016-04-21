(function(){
	
	angular
		.module("gestaoCherry")
		.controller("ProdutoCadastroCtrl", ["$scope", "produto", "produtoService", "$location", ProdutoCadastroCtrl]);
	
	function ProdutoCadastroCtrl($scope, produto, produtoService, $location) {
		
		$scope.produto = produto;		
		
		$scope.cadastrarProduto = function() {
			//funcao replace funciona somente se o campo for string
			if(typeof $scope.produto.preco === 'string') {
				$scope.produto.preco = $scope.produto.preco.replace(',', '.');
			}
			
			if(isNaN($scope.produto.preco || $scope.produto.preco <= 0)) {
				toastr.error("Digite um preço válido", "Preço Inválido");				
			}
			else {
				//Se era uma alteracao, salvar e permanecer na pagina
				if($scope.produto.id) {
					produtoService.cadastrarProduto($scope.produto).then(atualizarProduto, mensagemErro);
				}
				else { //Se nao, cadastrar e ir para a tela de consulta
					produtoService.cadastrarProduto($scope.produto).then(redirecionar, mensagemErro);
				}				
			}
			
		};
		
		function atualizarProduto(data) {
			toastr.success("Produto alterado com sucesso!");
			$scope.produto = data;
		}
		
		function redirecionar() {
			toastr.success("Produto cadastrado com sucesso!");
			$location.path("/produtoConsulta");
		}
		
		function mensagemErro() {
			toastr.error("Não foi possível cadastrar","Erro");
		}		
	}
	
}());