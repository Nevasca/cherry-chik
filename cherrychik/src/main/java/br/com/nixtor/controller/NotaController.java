package br.com.nixtor.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.nixtor.model.Nota;
import br.com.nixtor.service.NotaService;

@RestController
public class NotaController {

	@Autowired
	NotaService notaService;
	
//	
//	@RequestMapping(value = "addNota", method = RequestMethod.GET)
//	public void addNota() {
//		Nota nota = new Nota();
//		nota.setTitulo("Teste");
//		nota.setDescricao("Teste Funcionou");
//		notaService.save(nota);
//	}
//	
	@RequestMapping(value = "/api/notas/", method = RequestMethod.GET)
	public ResponseEntity<List<Nota>> listarNotas() {
		List<Nota> notas = notaService.listarNotas();		
		
		return new ResponseEntity<List<Nota>>(notas, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/notas/", method = RequestMethod.POST)
	public ResponseEntity<Void> salvarNota(@RequestBody Nota nota, UriComponentsBuilder ucBuilder) {
//		System.out.println("Id: " + nota.getId());
//		System.out.println("Título: " + nota.getTitulo());
//		System.out.println("Descrição: " + nota.getDescricao());
		
		notaService.save(nota);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
}
