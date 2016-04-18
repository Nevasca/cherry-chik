package br.com.nixtor.service;

import java.util.List;

import br.com.nixtor.model.Enderecador;
import br.com.nixtor.model.EnderecadorRelatorio;

public interface EnderecadorService {

	Enderecador salvar(Enderecador enderecador);
	void deletar(Long id);
	List<Enderecador> listarEnderecadores();
	List<Enderecador> pesquisarEnderecador(Enderecador enderecador);
	List<EnderecadorRelatorio> relatorio();
	
}
