(function(){
	
	angular
		.module("gestaoCherry")
		.controller("PedidoConsultaCtrl", ["$scope", "pedidos", "pedidoService", PedidoConsultaCtrl]);
	
	function PedidoConsultaCtrl($scope, pedidos, pedidoService) {
		
		$scope.pedidos = pedidos; //Lista de produtos cadastrados no sistema		
		$scope.pedidoBusca = {};
		
		$scope.calcularTotal = function(itens) {
			return pedidoService.calcularTotal(itens);
		}
		
		$scope.pesquisarPedido = function() {
			if($scope.pedidoBusca.data) {
				pedidoService.listarPedidosPorData($scope.pedidoBusca.data).then(atualizarLista);
			}
			else {
				pedidoService.listarPedidos().then(atualizarLista);
			}			
		};
		
		function atualizarLista(data) {
			$scope.pedidos = data;
		};
	}
	
}());