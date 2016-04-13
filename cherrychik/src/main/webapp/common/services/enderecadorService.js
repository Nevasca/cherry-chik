(function(){
	angular
		.module("common.services")
		.factory("enderecadorService", ["$http", enderecadorService]);
	
	function enderecadorService($http) {
		
		var url = "api/enderecador/";				
		
		function salvarEnderecador(enderecador) {
			return $http.post(url, enderecador).then(function(response){return response.data;});
		}					
		
		return {			
			salvarEnderecador: salvarEnderecador
		}
		
	}
}());