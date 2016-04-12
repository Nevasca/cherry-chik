(function(){
	
	angular
		.module("common.services")
		.factory("notaResource", ["$resource", notaResource]);
	
	function notaResource($resource) {
		return $resource("/api/notas/:id");		
	}
	
}());