package br.com.nixtor.service;

import java.util.List;

import br.com.nixtor.model.Produto;

public interface ProdutoService {

	Produto cadastrar(Produto produto);
	List<Produto> listarProdutos();
	void excluir(Long id);
	Produto buscarPorId(Long id);
}
