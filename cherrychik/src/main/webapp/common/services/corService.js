(function(){
	
	angular
	.module("common.services")
	.factory("corService", [corService]);
	
	function corService() {
		
		//Retorna um array com as cores pre disponiveis
		//Talvez seja interessante cadastrar no banco tambem
		function getPaletaCores() {
			
			var cores = [{
					nome: "Amarelo",
					codigo: "f8ec42",
					selecionada: false
				},
				{
					nome: "Azul Marinho",
					codigo: "232749",
					selecionada: false
				},
				{
					nome: "Azul Royal",
					codigo: "3366ff",
					selecionada: false
				},
				{
					nome: "Bege",
					codigo: "fff5de",
					selecionada: false
				},
				{
					nome: "Pink",
					codigo: "ea257f",
					selecionada: false
				},
				{
					nome: "Branco",
					codigo: "ffffff",
					selecionada: false
				},
				{
					nome: "Amarelo",
					codigo: "f8ec42",
					selecionada: false
				},
				{
					nome: "Preto",
					codigo: "000000",
					selecionada: false
				},
				{
					nome: "Coral",
					codigo: "d53b52",
					selecionada: false
				},
				{
					nome: "Verde Abacate",
					codigo: "d3db7b",
					selecionada: false
				},
				{
					nome: "Verde Turquesa",
					codigo: "00a6a6",
					selecionada: false
				},
				{
					nome: "Vermelho",
					codigo: "d32433",
					selecionada: false
				},
				{
					nome: "Pink Fluorescente",
					codigo: "ff66ff",
					selecionada: false
				},
				{
					nome: "Laranja Fluorescente",
					codigo: "ff6666",
					selecionada: false
				},
				{
					nome: "Verde Fluorescente",
					codigo: "dfff69",
					selecionada: false
				},
				{
					nome: "Azul Royal Fluorescente",
					codigo: "3366ff",
					selecionada: false
				},
				{
					nome: "Azul",
					codigo: "24a2fd",
					selecionada: false
				},
				{
					nome: "Verde",
					codigo: "35ac75",
					selecionada: false
				},
				{
					nome: "Verde Escuro",
					codigo: "00584b",
					selecionada: false
				},
				{
					nome: "Cinza",
					codigo: "939393",
					selecionada: false
				},
				{
					nome: "Laranja",
					codigo: "e38724",
					selecionada: false
				},
				{
					nome: "Rosa",
					codigo: "e66187",
					selecionada: false
				}
			];
			
			return cores;
		}
		
		return {
			getPaletaCores: getPaletaCores
		}
	}
}());