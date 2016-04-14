package br.com.nixtor.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.nixtor.model.Produto;
import br.com.nixtor.repository.ProdutoRepository;

@Service
public class ProdutoServiceImpl implements ProdutoService {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	public Produto cadastrar(Produto produto) {
		return produtoRepository.save(produto);
	}

	public List<Produto> listarProdutos() {
		return produtoRepository.findAll();
	}

	public void excluir(Long id) {
		produtoRepository.delete(id);
	}

}
