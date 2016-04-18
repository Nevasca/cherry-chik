(function(){
	angular
		.module("common.services")
		.factory("pedidoService", ["$http", pedidoService]);
	
	function pedidoService($http) {
		
		var url = "api/pedido/";				
		
		function salvarPedido(pedido) {
			return $http.post(url, pedido).then(function(response){return response.data;});
		}
		
		function listarPedidos() {
			return $http.get(url).then(function(response){return response.data;});
		}
		
		function buscarPorId(id) {
			return $http.get(url + id).then(function(response){return response.data;});
		}
		
		function calcularSubtotal(item) {
			return item.produto.preco * item.quantidade;
		}
		
		function calcularTotal(itens) {
			var total = 0;
			
			for(var i = 0; i < itens.length; i++) {
				total += calcularSubtotal(itens[i]);
			}			
			return total;
		};
		
		return {			
			salvarPedido: salvarPedido,		
			listarPedidos: listarPedidos,
			buscarPorId: buscarPorId,
			calcularSubtotal: calcularSubtotal,
			calcularTotal: calcularTotal
		}
		
	}
}());