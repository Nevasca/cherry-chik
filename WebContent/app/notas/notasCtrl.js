(function(){
	angular
		.module("gestaoCherry")
		.controller("NotasCtrl", ["$scope", NotasCtrl]);
	
	function NotasCtrl($scope) {
		
		//Para testes
		$scope.notas = [
		   {"id": 1,
			"titulo": "Faz logo?",
			"conteudo": "Infelizmente não conseguimos confeccionar porque nossa estamparia é terceirizada"
		   },
		   {"id": 2,
			"titulo": "Onde fica a loja?",
			"conteudo": "Nossa loja física fica no Brás - SP nesse endereço: Av Vautier,284 Shopping Vautier 1 Piso, Ala Indigo Box 204 Canindé, São Paulo 03031-000 Próxima ao caixa eletrônico e à praça de alimentação. Funcionamos de seg à sexta das 04h às 16h e de sáb das 04h às 12h"
		   },
		   {"id": 3,
			"titulo": "Onde fica a loja?",
			"conteudo": "Como são estoques diferentes, para saber os modelos disponíveis é necessário entrar em contato diretamente com as meninas da loja física: Fixo: (11) 2739-7151 Whats: Rose (11) 97323-6821"
		   }
		];
		
		$scope.adicionarNota = function() {			
			if(!$scope.novaNota.id) {
				$scope.novaNota.id = $scope.notas[$scope.notas.length - 1].id + 1;				
			}
			$scope.notas.push($scope.novaNota);
			$scope.novaNota = {};	
		}
	}
}());