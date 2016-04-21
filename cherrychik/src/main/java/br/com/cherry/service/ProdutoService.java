package br.com.cherry.service;

import java.util.List;

import br.com.cherry.model.Produto;

public interface ProdutoService {

	Produto cadastrar(Produto produto);
	List<Produto> listarProdutos();
	void excluir(Long id);
	Produto buscarPorId(Long id);
}
