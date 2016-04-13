(function(){
	
	angular
		.module("common.services")
		.factory("notaResource", ["$resource", notaResource]);
	
	function notaResource($resource) {
		return $resource("http://localhost:8080/cherrychik/api/notas/:id");
	}
	
}());