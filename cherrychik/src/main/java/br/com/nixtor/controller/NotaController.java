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

import br.com.nixtor.model.Nota;
import br.com.nixtor.service.NotaService;

@RestController
public class NotaController {

	@Autowired
	private NotaService notaService;
	
	@RequestMapping(value = "/api/notas/", method = RequestMethod.GET)
	public ResponseEntity<List<Nota>> listarNotas() {		
		
		List<Nota> notas = notaService.listarNotas();		
		return new ResponseEntity<List<Nota>>(notas, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/notas/", method = RequestMethod.POST)
	public ResponseEntity<Nota> salvarNota(@RequestBody Nota nota) {		

		Nota notaSalva = notaService.salvar(nota);
		return new ResponseEntity<Nota>(notaSalva, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/api/notas/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deletarNota(@PathVariable("id") Long id) {
		
		//se existe uma nota com esse id, deletar
		if(notaService.buscarPorId(id) != null) {
			notaService.deletar(id);
		}
		
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	
}
