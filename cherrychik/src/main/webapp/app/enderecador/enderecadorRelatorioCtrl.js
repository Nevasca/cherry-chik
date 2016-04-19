(function(){
	
	angular
		.module("gestaoCherry")
		.controller("EnderecadorRelatorioCtrl", ["$scope", "relatorio", "$filter", EnderecadorRelatorioCtrl]);
	
	function EnderecadorRelatorioCtrl($scope, relatorio, $filter) {
		var graficoDadosTotal = []; //Total por mes
		var graficoDadosTipo = []; //Total geral por tipo de frete
		var totalSedex = 0;
		var totalPac = 0;
		
		for(var i = 0; i < relatorio.length; i++) {
			totalSedex += relatorio[i].totalSedex;
			totalPac += relatorio[i].totalPac;
			
			graficoDadosTotal.push({
				x: $filter('date')(relatorio[i].data, 'MMMM'),
				y: [relatorio[i].total,
				    relatorio[i].totalSedex,
				    relatorio[i].totalPac]
			});
		}
		$scope.dadosTotal = {
				series: ["Total", "SEDEX", "PAC"],
				data: graficoDadosTotal
		};
		
		$scope.configTotal = {
			title: "Total tipo de frete por mês",
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
		
		graficoDadosTipo.push({
			x: "SEDEX",
			y: [totalSedex]
		});
		
		graficoDadosTipo.push({
			x: "PAC",
			y: [totalPac]
		});
		
		$scope.dadosTipo = {
			series: ["SEDEX", "PAC"],
			data: graficoDadosTipo
		};
		$scope.configTipo = {
				title: "Total SEDEX e PAC",
				tooltips: true,
				labels: true,
				mouseover: function(){},
				mouseout: function(){},
				click: function(){},
				legend: {
					display: true,
					position: 'right'
				},
				colors: ["#bcbcbc", "#cdcdcd"]
		};		
	}
	
}());