package br.com.nixtor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import br.com.nixtor.model.Nota;
import br.com.nixtor.service.NotaService;

@Controller
public class NotaController {

	@Autowired
	NotaService notaService;
	
	@RequestMapping(value = "addNota", method = RequestMethod.GET)
	public void addNota() {
		Nota nota = new Nota();
		nota.setTitulo("Teste");
		nota.setDescricao("Teste Funcionou");
		notaService.save(nota);
	}
}
