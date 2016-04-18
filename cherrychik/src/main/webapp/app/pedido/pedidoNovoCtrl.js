(function(){
	
	angular
		.module("gestaoCherry")
		.controller("PedidoNovoCtrl", ["$scope", "produtos", "pedidoService", "pedido", PedidoNovoCtrl]);
	
	function PedidoNovoCtrl($scope, produtos, pedidoService, pedido) {
		
		$scope.produtos = produtos; //Lista de produtos cadastrados no sistema
						
		$scope.novoItem = {};
		if(pedido.id) //Se for um pedido existente
		{
			$scope.pedido = pedido;
		}
		else { //Novo pedido
			$scope.pedido = {};
			$scope.pedido.itens = [];
		}

		$scope.addItem = function() {
			
			if($scope.novoItem.index) {
				var i = $scope.novoItem.index;
				$scope.novoItem.produto = $scope.produtos[i];				
				if($scope.pedido.itens.indexOf($scope.novoItem) == -1) { //Se for um novo item, adicionar na lista, se não, só editar
					$scope.pedido.itens.push($scope.novoItem);
				}
				$scope.novoItem = {};
			}			
		};
		
		$scope.editarItem = function(index) {
			$scope.novoItem = $scope.pedido.itens[index];
		};
		
		$scope.removerItem = function(index) {
			$scope.pedido.itens.splice(index, 1);
		};
		
		$scope.calcularSubtotal = function(item) {
			return pedidoService.calcularSubtotal(item);
		};
		
		$scope.calcularTotal = function() {
			return pedidoService.calcularTotal($scope.pedido.itens);
		};
		
		$scope.finalizarPedido = function() {			
			pedidoService.salvarPedido($scope.pedido);
		};
		
	}
	
}());