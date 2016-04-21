package br.com.cherry.service;

import java.util.List;

import br.com.cherry.model.Descricao;

public interface DescricaoService {

	Descricao salvar(Descricao descricao);
	List<Descricao> listarDescricoes();
	void excluir(Long id);
}
