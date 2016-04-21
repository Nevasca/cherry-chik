(function(){
	
	angular
		.module("gestaoCherry")
		.controller("ProdutoConsultaCtrl", ["$scope", "produtos", "produtoService", ProdutoConsultaCtrl]);
	
	function ProdutoConsultaCtrl($scope, produtos, produtoService) {
		
		$scope.produtos = produtos;
		var indexDel = 0;
		
		$scope.deletarProduto = function(index) {
			indexDel = index;
			produtoService.excluirProduto($scope.produtos[index].id).then(removerDaLista, mensagemErroExcluir);			
		};
		
		function removerDaLista() {
			toastr.success("Excluído");
			$scope.produtos.splice(indexDel, 1);
		}
		
		function mensagemErroExcluir() {
			toastr.error("Não foi possível excluir o produto","Erro");
		}
	}
	
}());