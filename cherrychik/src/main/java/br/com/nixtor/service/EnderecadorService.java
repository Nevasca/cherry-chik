package br.com.nixtor.service;

import java.util.List;

import br.com.nixtor.model.Enderecador;

public interface EnderecadorService {

	Enderecador salvar(Enderecador enderecador);
	void deletar(Long id);
	List<Enderecador> listarEnderecadores();
	List<Enderecador> pesquisarEnderecador(Enderecador enderecador);
	
}
