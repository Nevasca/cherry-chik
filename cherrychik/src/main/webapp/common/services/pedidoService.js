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
		
		function listarPedidosPorData(data) {
			return $http.post(url + "filtro/", data).then(function(response){return response.data;});
		}
		
		function buscarPorId(id) {
			return $http.get(url + id).then(function(response){return response.data;});
		}
		
		function calcularSubtotal(item) {
			return item.preco * item.quantidade;
		}
		
		function calcularTotal(itens) {
			var total = 0;
			
			for(var i = 0; i < itens.length; i++) {
				total += calcularSubtotal(itens[i]);
			}			
			return total;
		};
		
		function relatorio() {
			return $http.get(url + "relatorio/").then(function(response){return response.data;});
		}
		
		return {			
			salvarPedido: salvarPedido,		
			listarPedidos: listarPedidos,
			listarPedidosPorData: listarPedidosPorData,
			buscarPorId: buscarPorId,
			calcularSubtotal: calcularSubtotal,
			calcularTotal: calcularTotal,
			relatorio: relatorio,			
		}
		
	}
}());