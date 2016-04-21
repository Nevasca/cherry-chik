package br.com.cherry.service;

import java.util.Date;
import java.util.List;

import br.com.cherry.model.Enderecador;
import br.com.cherry.model.EnderecadorRelatorio;

public interface EnderecadorService {

	Enderecador salvar(Enderecador enderecador);
	void deletar(Long id);
	List<Enderecador> listarEnderecadores();	
	List<EnderecadorRelatorio> relatorio();
	List<Enderecador> listarEnderecadoresPorData(Date data);
	
}
