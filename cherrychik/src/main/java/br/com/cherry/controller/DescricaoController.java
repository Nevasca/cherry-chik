package br.com.cherry.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.cherry.model.Descricao;
import br.com.cherry.service.DescricaoService;

@RestController
public class DescricaoController {
	
	@Autowired
	private DescricaoService descricaoService;
	
	@RequestMapping(value = "/api/descricao/", method = RequestMethod.GET)
	public ResponseEntity<List<Descricao>> listarDescricoes() {
		List<Descricao> descricoes = descricaoService.listarDescricoes();
		return new ResponseEntity<List<Descricao>>(descricoes, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/descricao/", method = RequestMethod.POST)
	public ResponseEntity<Descricao> salvar(@RequestBody Descricao descricao) {
		Descricao descricaoCadastrada = descricaoService.salvar(descricao);
		return new ResponseEntity<Descricao>(descricaoCadastrada, HttpStatus.CREATED);		
	}
	
	@RequestMapping(value = "/api/descricao/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> excluir(@PathVariable("id") Long id) {
		descricaoService.excluir(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}
