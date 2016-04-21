(function(){
	
	angular
		.module("gestaoCherry")
		.controller("DescricaoCtrl", ["$scope", "descricoes", "descricaoService", "$sce", DescricaoCtrl]);
	
	function DescricaoCtrl($scope, descricoes, descricaoService, $sce) {
		
		$scope.descricoes = descricoes;
		$scope.novaDescricao = {};
		
		var indexDel = 0;
		
		$scope.salvarDescricao = function() {
			//Verifica se exite um id (está editando uma nota já criada) ou é uma nova
			var id = $scope.novaDescricao.id ? $scope.novaDescricao.id : null;
			$scope.novaDescricao.template = $sce.trustAsHtml($scope.novaDescricao.template).toString();			
			
			if(id == null)
			{
				descricaoService.salvarDescricao($scope.novaDescricao).then(atualizarLista, mensagemErroSalvar); //Atualiza a lista com o novo criado			
			}
			else {
				descricaoService.salvarDescricao($scope.novaDescricao).then(mensagemSucesso, mensagemErroSalvar);
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
				
		$scope.deletarDescricao = function(index) {
			indexDel = index;			
			descricaoService.deletarDescricao($scope.descricoes[index].id).then(removerDaLista, mensagemErroExcluir);			
		};
		
		function removerDaLista() {
			toastr.success("Descrição excluída");
			//Remove o elemento da pagina 
			//(a navegacao fica mais fluida quando nao atualiza a lista, alem de nao precisar consultar novamente no banco)
			$scope.descricoes.splice(indexDel, 1);
		}
		
		//Atualiza o array de notas consultando o web service
		function atualizarLista(data) {
			mensagemSucesso();
			$scope.descricoes.push(data);
		}
		
		$scope.$watch('novaDescricao.template', function(){
			if($scope.novaDescricao.template)
			  $scope.novaDescricao.template = $scope.novaDescricao.template.replace(/\n/g, "<br>");
		});
		
		$scope.visualizarDescricao = function(descricao) {
			$scope.viewDescricao = descricao;
		}
		
		function mensagemSucesso() {
			toastr.success("Descrição salva!");
		}
		
		function mensagemErroSalvar() {
			toastr.error("Não foi possível salvar a descrição","Erro");
		}
		
		function mensagemErroExcluir() {
			toastr.error("Não foi possível excluir a descrição","Erro");
		}	
		
	}
	
}());