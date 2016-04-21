package br.com.cherry.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.cherry.model.Produto;
import br.com.cherry.repository.ProdutoRepository;

@Service
public class ProdutoServiceImpl implements ProdutoService {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	@Transactional
	public Produto cadastrar(Produto produto) {
		return produtoRepository.save(produto);
	}

	public List<Produto> listarProdutos() {
		return produtoRepository.findAllByOrderByIdDesc();
	}

	public void excluir(Long id) {
		produtoRepository.delete(id);
	}

	public Produto buscarPorId(Long id) {
		return produtoRepository.findOne(id);
	}

}
