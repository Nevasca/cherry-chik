(function(){
	angular
		.module("gestaoCherry")
		.controller("NotasCtrl", ["$scope", "notas", "notaService", NotasCtrl]);
	
	function NotasCtrl($scope, notas, notaService) {
		
		$scope.notas = notas;
		//Para copiar o descricao da nota quando clicar em um botao com a classe abaixo aplicada
		var clipboard = new Clipboard(".copiar");			
		
		$scope.salvarNota = function() {
			//Verifica se exite um id (está editando uma nota já criada) ou é uma nova
			var id = $scope.novaNota.id ? $scope.novaNota.id : null;
			//var nota = new notaResource({id: id}); //Instancia o resource com o id da nota						
			//nota.titulo = $scope.novaNota.titulo;
			//nota.descricao = $scope.novaNota.descricao;
			//nota.$save();			
					
			if(id == null)
			{
				notaService.salvarNota($scope.novaNota).then(atualizarLista);				
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
			//notaResource.remove({id: id}); //Remove do banco
			notaService.deletarNota(id);
			
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
	}
}());