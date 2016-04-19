(function(){
	
	angular
		.module("gestaoCherry")
		.controller("PedidoRelatorioCtrl", ["$scope", "relatorio", "$filter", PedidoRelatorioCtrl]);
	
	function PedidoRelatorioCtrl($scope, relatorio, $filter) {
		var graficoDadosTotal = []; //Total de pedidos realizado por mes
		var graficoDadosFaturamento = []; //Total faturamento por mes	
		
		for(var i = 0; i < relatorio.length; i++) {
			
			graficoDadosTotal.push({
				x: $filter('date')(relatorio[i].data, 'MMMM'),
				y: [relatorio[i].total]
			});
			
			graficoDadosFaturamento.push({
				x: $filter('date')(relatorio[i].data, 'MMMM'),
				y: [relatorio[i].faturamento]
			});
		}
		
		$scope.dadosTotal = {
				series: ["Total"],
				data: graficoDadosTotal
		};
		
		$scope.configTotal = {
			title: "Total de pedidos realizados por mês",
			tooltips: true,
			labels: false,
			mouseover: function(){},
			mouseout: function(){},
			click: function(){},
			legend: {
				display: true,
				position: 'right'
			},
			colors: ["#bcbcbc", "#cdcdcd", "#dedede"]
		};
		
		$scope.dadosFaturamento = {
			series: ["R$"],
			data: graficoDadosFaturamento
		};
		$scope.configFaturamento = {
				title: "Total faturamento por mês",
				tooltips: true,
				labels: false,
				mouseover: function(){},
				mouseout: function(){},
				click: function(){},
				legend: {
					display: true,
					position: 'right'
				},
				colors: ["#dedede"]
		};		
	}
	
}());