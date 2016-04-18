(function(){
	
	angular
		.module("gestaoCherry")
		.controller("PedidoConsultaCtrl", ["$scope", "pedidos", "pedidoService", PedidoConsultaCtrl]);
	
	function PedidoConsultaCtrl($scope, pedidos, pedidoService) {
		
		$scope.pedidos = pedidos; //Lista de produtos cadastrados no sistema
		
		$scope.calcularTotal = function(itens) {
			return pedidoService.calcularTotal(itens);
		}
		
	}
	
}());