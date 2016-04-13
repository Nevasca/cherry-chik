package br.com.nixtor.service;

import java.util.List;

import br.com.nixtor.model.Nota;

public interface NotaService {

	Nota salvar(Nota nota);

	List<Nota> listarNotas();
	
	Nota buscarPorId(Long id);
	
	void deletar(Long id);
}
