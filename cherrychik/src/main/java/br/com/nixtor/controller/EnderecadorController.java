package br.com.nixtor.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.nixtor.model.Enderecador;
import br.com.nixtor.service.EnderecadorService;

@RestController
public class EnderecadorController {

	@Autowired
	private EnderecadorService enderecadorService;
	private static final String URL = "/api/enderecador/"; 
	
	@RequestMapping(value = URL, method = RequestMethod.POST)
	public ResponseEntity<Enderecador> salvarEnderecador(@RequestBody Enderecador enderecador) {		
		Enderecador enderecadorSalvo = enderecadorService.salvar(enderecador);		
		return new ResponseEntity<Enderecador>(enderecadorSalvo, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = URL + "{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deletarEnderecador(@PathVariable("id") Long id) {
		
		enderecadorService.deletar(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@RequestMapping(value = URL, method = RequestMethod.GET)
	public ResponseEntity<List<Enderecador>> listarEnderecadores() {
		List<Enderecador> enderecadores = enderecadorService.listarEnderecadores();
		return new ResponseEntity<List<Enderecador>>(enderecadores, HttpStatus.OK);
	}
	
	@RequestMapping(value = URL + "filtro/", method = RequestMethod.POST)
	public ResponseEntity<List<Enderecador>> pesquisarEnderecador(@RequestBody Enderecador enderecador) {
		
		List<Enderecador> enderecadores = enderecadorService.pesquisarEnderecador(enderecador);		
		
		return new ResponseEntity<List<Enderecador>>(enderecadores, HttpStatus.OK);
	}
	
}
