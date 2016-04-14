package br.com.nixtor.service;

import java.util.List;

import br.com.nixtor.model.Descricao;

public interface DescricaoService {

	Descricao salvar(Descricao descricao);
	List<Descricao> listarDescricoes();
	void excluir(Long id);
}
