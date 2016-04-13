package br.com.nixtor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	
	@RequestMapping(value = "/api/enderecador/", method = RequestMethod.POST)
	public ResponseEntity<Enderecador> salvarEnderecador(@RequestBody Enderecador enderecador) {
		
		Enderecador enderecadorSalvo = enderecadorService.salvar(enderecador);		
		return new ResponseEntity<Enderecador>(enderecadorSalvo, HttpStatus.CREATED);
	}
	
	
	
}
