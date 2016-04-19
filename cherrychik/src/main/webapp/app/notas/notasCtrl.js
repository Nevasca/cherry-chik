(function(){
	angular
		.module("gestaoCherry")
		.controller("NotasCtrl", ["$scope", "notas", "notaService", "$sce", NotasCtrl]);
	
	function NotasCtrl($scope, notas, notaService, $sce) {
		
		$scope.notas = notas;
		//Para copiar o descricao da nota quando clicar em um botao com a classe abaixo aplicada
		var clipboard = new Clipboard(".copiar");
		$scope.novaNota = {};
		
		$scope.salvarNota = function() {
			//Verifica se exite um id (está editando uma nota já criada) ou é uma nova
			var id = $scope.novaNota.id ? $scope.novaNota.id : null;
			$scope.novaNota.descricao = $sce.trustAsHtml($scope.novaNota.descricao).toString();
			if(!$scope.novaNota.cor) {
				$scope.novaNota.cor = getCorNota();
			}				
			
			if(id == null)
			{
				notaService.salvarNota($scope.novaNota).then(atualizarLista); //Atualiza a lista com o novo criado			
			}
			else {
				notaService.salvarNota($scope.novaNota);
			}
						
			$scope.limparNota();
		}
		
		//Pega uma nota existente no array e coloca para edicao
		$scope.editarNota = function(nota) {
			
			$scope.novaNota = nota;
		};
		
		$scope.limparNota = function() {
			$scope.novaNota = {};
		};
				
		$scope.deletarNota = function(id) {
			notaService.deletarNota(id); //Remove do banco
			
			//Remove o elemento da pagina 
			//(a navegacao fica mais fluida quando nao atualiza a lista, alem de nao precisar consultar novamente no banco)
			var index = 0;
			for(var i = 0; i < notas.length; i++) {
				if(notas[i].id == id) {
					index = i;
					break;
				}
			}						
			$scope.notas.splice(index, 1);
		};
		
		//Atualiza o array de notas consultando o web service
		function atualizarLista(data) {
			$scope.notas.push(data);
		}
		
		//Formata a descricao da nota com pular linha para <br>
		$scope.$watch('novaNota.descricao', function(){
			if($scope.novaNota.descricao)
			  $scope.novaNota.descricao = $scope.novaNota.descricao.replace(/\n/g, "<br>");
		});		
		
		//Retorna uma cor aleatoria para colocar de fundo na anotacao
		function getCorNota() {
			var cores = ["#FFFCD3", "#FFF3D3", "#FFEAD3", "#FFDDD3", "#FFD3D8"];
			
			return cores[Math.floor(Math.random() * cores.length)];			
		};
	}
}());