(function(){
	
	angular
		.module("gestaoCherry")
		.controller("DescricaoCtrl", ["$scope", "descricoes", "descricaoService", "$sce", DescricaoCtrl]);
	
	function DescricaoCtrl($scope, descricoes, descricaoService, $sce) {
		
		$scope.descricoes = descricoes;
		$scope.novaDescricao = {};
		
		$scope.salvarDescricao = function() {
			//Verifica se exite um id (está editando uma nota já criada) ou é uma nova
			var id = $scope.novaDescricao.id ? $scope.novaDescricao.id : null;
			$scope.novaDescricao.template = $sce.trustAsHtml($scope.novaDescricao.template).toString();			
			
			if(id == null)
			{
				descricaoService.salvarDescricao($scope.novaDescricao).then(atualizarLista); //Atualiza a lista com o novo criado			
			}
			else {
				descricaoService.salvarDescricao($scope.novaDescricao);
			}
						
			$scope.limparDescricao();
		}
		
		//Pega uma descricao existente no array e coloca para edicao
		$scope.editarDescricao = function(descricao) {
			
			$scope.novaDescricao = descricao;
		};
		
		$scope.limparDescricao = function() {
			$scope.novaDescricao = {};
		};
				
		$scope.deletarDescricao = function(id) {
			descricaoService.deletarDescricao(id);
			
			//Remove o elemento da pagina 
			//(a navegacao fica mais fluida quando nao atualiza a lista, alem de nao precisar consultar novamente no banco)
			var index = 0;
			for(var i = 0; i < $scope.descricoes.length; i++) {
				if($scope.descricoes[i].id == id) {
					index = i;
					break;
				}
			}						
			$scope.descricoes.splice(index, 1);
		};
		
		//Atualiza o array de notas consultando o web service
		function atualizarLista(data) {
			$scope.descricoes.push(data);
		}
		
		$scope.$watch('novaDescricao.template', function(){
			if($scope.novaDescricao.template)
			  $scope.novaDescricao.template = $scope.novaDescricao.template.replace(/\n/g, "<br>");
		});
		
		$scope.visualizarDescricao = function(descricao) {
			$scope.viewDescricao = descricao;
		}
		
	}
	
}());