(function(){
	
	angular
		.module("gestaoCherry")
		.controller("EnderecadorRelatorioCtrl", ["$scope", "relatorio", "$filter", EnderecadorRelatorioCtrl]);
	
	function EnderecadorRelatorioCtrl($scope, relatorio, $filter) {
		var graficoDadosTotal = [];
		for(var i = 0; i < relatorio.length; i++) {
			graficoDadosTotal.push({
				x: relatorio[i].mes,
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
			title: "Total por tipo de frete",
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
	}
	
}());