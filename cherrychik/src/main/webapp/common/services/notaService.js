(function(){
	angular
		.module("common.services")
		.factory("notaService", ["$http", notaService]);
	
	function notaService($http) {
		
		var url = "api/notas/";		
		
		function listarNotas() {			
			
			return $http.get(url)
				.then(function(response) {
					return response.data;
				});	
			
		}
		
		function salvarNota(nota) {
			return $http.post(url, nota).then(function(response){return response.data;});
		}
		
		function deletarNota(id) {
			$http.delete(url + id);
		}
		
		
		
		return {
			listarNotas: listarNotas,
			salvarNota: salvarNota,
			deletarNota: deletarNota
		}
		
	}
}());