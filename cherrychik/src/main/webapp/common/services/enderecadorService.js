(function(){
	angular
		.module("common.services")
		.factory("enderecadorService", ["$http", enderecadorService]);
	
	function enderecadorService($http) {
		
		var url = "api/enderecador/";				
		
		function salvarEnderecador(enderecador) {
			return $http.post(url, enderecador).then(function(response){return response.data;});
		}
		
		function deletarEnderecador(id) {
			$http.delete(url + id);
		}
		
		function listarEnderecadores() {
			return $http.get(url).then(function(response){return response.data;});
		}
		
		function pesquisarEnderecador(enderecador) {
			return $http.post(url + "filtro/", enderecador).then(function(response){return response.data;});
		}
		
		return {			
			salvarEnderecador: salvarEnderecador,
			deletarEnderecador: deletarEnderecador,
			listarEnderecadores: listarEnderecadores,
			pesquisarEnderecador: pesquisarEnderecador
		}
		
	}
}());