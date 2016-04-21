(function(){
	
	angular
		.module("gestaoCherry")
		.controller("PedidoNovoCtrl", ["$scope", "produtos", "pedidoService", "pedido", "$location", PedidoNovoCtrl]);
	
	function PedidoNovoCtrl($scope, produtos, pedidoService, pedido, $location) {
		
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
				$scope.novoItem.nome = $scope.produtos[i].nome;
				$scope.novoItem.preco = $scope.produtos[i].preco;
				
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
			$scope.pedido.total = $scope.calcularTotal();
			if($scope.pedido.id) { //Se for alteracao de pedido, permanecer na pagina 
				pedidoService.salvarPedido($scope.pedido).then(mensagemSucesso, mensagemErroAlterar);
			} 
			else { //Redirecionar para outra pagina se for um novo
				pedidoService.salvarPedido($scope.pedido).then(redirecionar);
			}
			
		};
		
		function redirecionar() {
			toastr.success("Pedido finalizado");
			$location.path("/pedidoConsulta");
		}
		
		function mensagemErro() {
			toastr.error("Não foi possível finalizar o pedido");
		}
		
		function mensagemErroAlterar() {
			toastr.error("Não foi possível alterar o pedido");
		}
		
		function mensagemSucesso() {
			toastr.success("Pedido alterado");
		}
	}
	
}());