package br.com.cherry.service;

import java.util.List;

import br.com.cherry.model.Nota;

public interface NotaService {

	Nota salvar(Nota nota);

	List<Nota> listarNotas();
	
	Nota buscarPorId(Long id);
	
	void deletar(Long id);
}
