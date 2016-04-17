(function(){
	angular
		.module("common.services")
		.factory("produtoService", ["$http", produtoService]);
	
	function produtoService($http) {
		
		var url = "api/produto/";				
		
		function cadastrarProduto(produto) {
			return $http.post(url, produto).then(function(response){return response.data;});
		}
		
		function excluirProduto(id) {
			$http.delete(url + id);
		}
		
		function listarProdutos() {
			return $http.get(url).then(function(response){return response.data;});
		}
		
		function buscarPorId(id) {
			return $http.get(url + id).then(function(response){return response.data;});
		}
		
		return {			
			cadastrarProduto: cadastrarProduto,
			excluirProduto: excluirProduto,
			listarProdutos: listarProdutos,
			buscarPorId: buscarPorId
		}
		
	}
}());