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

import br.com.nixtor.model.Produto;
import br.com.nixtor.service.ProdutoService;

@RestController
public class ProdutoController {
	
	@Autowired
	private ProdutoService produtoService;
	
	@RequestMapping(value = "/api/produto/", method = RequestMethod.GET)
	public ResponseEntity<List<Produto>> listarProdutos() {
		List<Produto> produtos = produtoService.listarProdutos();
		return new ResponseEntity<List<Produto>>(produtos, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/produto/", method = RequestMethod.POST)
	public ResponseEntity<Produto> cadastrarProduto(@RequestBody Produto produto) {
		Produto produtoCadastrado = produtoService.cadastrar(produto);
		return new ResponseEntity<Produto>(produtoCadastrado, HttpStatus.CREATED);		
	}
	
	@RequestMapping(value = "/api/produto/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> excluirProduto(@PathVariable("id") Long id) {
		produtoService.excluir(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}
