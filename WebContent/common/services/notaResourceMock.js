(function(){
	
	var app = angular.module("notaResourceMock", ["ngMockE2E"]);
	
	app.run(function($httpBackend) {
		
		//Para testes
		var notas = [
		   {"id": 1,
			"titulo": "Faz logo?",
			"conteudo": "Infelizmente não conseguimos confeccionar porque nossa estamparia é terceirizada"
		   },
		   {"id": 2,
			"titulo": "Onde fica a loja?",
			"conteudo": "Nossa loja física fica no Brás - SP nesse endereço: Av Vautier,284 Shopping Vautier 1 Piso, Ala Indigo Box 204 Canindé, São Paulo 03031-000 Próxima ao caixa eletrônico e à praça de alimentação. Funcionamos de seg à sexta das 04h às 16h e de sáb das 04h às 12h"
		   },
		   {"id": 3,
			"titulo": "Tem na loja?",
			"conteudo": "Como são estoques diferentes, para saber os modelos disponíveis é necessário entrar em contato diretamente com as meninas da loja física: Fixo: (11) 2739-7151 Whats: Rose (11) 97323-6821"
		   },
		   {"id": 4,
				"titulo": "Fazem troca?",
				"conteudo": "Realizamos a troca de qualquer produto, desde que nos avise dentro do período de 7 dias após o recebimento da encomenda"
		   }
		];
		
		var notaUrl = "/api/notas";
		
		$httpBackend.whenGET(notaUrl).respond(notas);
		
		var urlExpressao = new RegExp(notaUrl + "/[0-9][0-9]*", '');
		
		$httpBackend.whenGET(urlExpressao).respond(function(method, url, data) {
			var nota = {"id": 0};
			var parametros = url.split('/');
			var tamanho = parametros.length;
			var id = parametros[tamanho - 1];
			
			if(id > 0) {
				for(var i = 0; i < notas.length; i++) {
					if(notas[i].id == id) {
						nota = notas[i];
						break;
					}
				}
			}
			
			return [200, nota, {}];
		});
		
		$httpBackend.whenPOST(notaUrl).respond(function(method, url, data) {
			var nota = angular.fromJson(data);
			
			if(!nota.id) {
				nota.id = notas[notas.length - 1].id + 1;
				notas.push(nota);
			}
			else {
				for(var i = 0; i < notas.length; i++) {
					if(notas[i].id == nota.id) {
						notas[i] = nota;
						break;
					}
				}
			}
			
			return [200, nota, {}];
		});
		
		$httpBackend.whenDELETE(urlExpressao).respond(function(method, url, data) {			
			var parametros = url.split('/');
			var tamanho = parametros.length;
			var id = parametros[tamanho - 1];
			
			if(id > 0) {
				var index = 0;
				for(var i = 0; i < notas.length; i++) {
					if(notas[i].id == id) {
						index = i;
						break;
					}
				}
				
				//Remove o elemento
				notas.splice(index, 1);
			}
			
			return [200, id, {}];
		});
		
		$httpBackend.whenGET(/app/).passThrough();
		
	});
	
}());