(function(){
	
	angular
		.module("common.services")
		.factory("descricaoService", ["$http", descricaoService]);
	
	function descricaoService($http) {
		
		var url = "api/descricao/";		
		
		function listarDescricoes() {			
			
			return $http.get(url)
				.then(function(response) {
					return response.data;
				});			
		}
		
		function salvarDescricao(descricao) {
			return $http.post(url, descricao).then(function(response){return response.data;});
		}
		
		function deletarDescricao(id) {			
			return $http.delete(url + id);
		}				
		
		return {
			listarDescricoes: listarDescricoes,
			salvarDescricao: salvarDescricao,
			deletarDescricao: deletarDescricao
		}
		
	}
	
}());