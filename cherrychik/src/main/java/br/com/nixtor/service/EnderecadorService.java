package br.com.nixtor.service;

import java.util.Date;
import java.util.List;

import br.com.nixtor.model.Enderecador;
import br.com.nixtor.model.EnderecadorRelatorio;

public interface EnderecadorService {

	Enderecador salvar(Enderecador enderecador);
	void deletar(Long id);
	List<Enderecador> listarEnderecadores();	
	List<EnderecadorRelatorio> relatorio();
	List<Enderecador> listarEnderecadoresPorData(Date data);
	
}
