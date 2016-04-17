(function(){
	
	angular
		.module("gestaoCherry")
		.controller("PedidoNovoCtrl", ["$scope", "produtos", PedidoNovoCtrl]);
	
	function PedidoNovoCtrl($scope, produtos) {
		
		$scope.produtos = produtos; //Lista de produtos cadastrados no sistema
		$scope.itens = []; //Produtos adicionados ao pedido
		
		$scope.novoItem = {};
		
		$scope.addItem = function() {
			
			if($scope.novoItem.index) {
				var i = $scope.novoItem.index;
				var qtd = $scope.novoItem.quantidade;
				$scope.itens.push(angular.copy($scope.produtos[i]));
				$scope.itens[$scope.itens.length - 1].quantidade = qtd;
			}			
		};
		
		$scope.mudarItem = function() {
			var i = $scope.novoItem.index;
			$scope.novoItem = $scope.produtos[i];
			$scope.novoItem.index = i;
		};
		
		$scope.removerItem = function(index) {
			$scope.itens.splice(index, 1);
		};
		
		$scope.calcularSubtotal = function(item) {
			return item.preco * item.quantidade;
		};
		
		$scope.calcularTotal = function() {
			var total = 0;
			
			for(var i = 0; i < $scope.itens.length; i++) {
				total += $scope.calcularSubtotal($scope.itens[i]);
			}			
			return total;
		};
		
	}
	
}());