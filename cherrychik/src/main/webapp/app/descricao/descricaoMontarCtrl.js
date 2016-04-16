(function(){
	
	angular
		.module("gestaoCherry")
		.controller("DescricaoMontarCtrl", ["$scope", "descricoes", "$sce", "corService", DescricaoMontarCtrl]);
	
	function DescricaoMontarCtrl($scope, descricoes, $sce, corService) {
		
		//Para copiar o descricao da nota quando clicar em um botao com a classe abaixo aplicada
		var clipboard = new Clipboard(".copiar");
		
		$scope.descricoes = descricoes;
		$scope.novaDescricao = {};
		$scope.cores = corService.getPaletaCores();
		
		$scope.coresSelecionadas = [];
		
		//Atualiza o template de acordo com o index da descricao selecionada
		$scope.mudarTemplate = function() {			
			$scope.novaDescricao.template = $scope.descricoes[$scope.novaDescricao.index].template;
		}
		
		//Para adicionar ou remover uma cor da descricao montada
		$scope.toggleCor = function(cor) {
			//Se ela estava selecionada, remover da lista
			if(cor.selecionada) {
				$scope.coresSelecionadas.splice($scope.coresSelecionadas.indexOf(cor), 1);
			}
			else { //Se nao, adicionar
				$scope.coresSelecionadas.push(cor);
			}
			
			cor.selecionada = !cor.selecionada;
		}		
	}
	
}());