package br.com.nixtor.service;

import java.util.List;

import br.com.nixtor.model.Nota;

public interface NotaService {

	Nota save(Nota nota);

	List<Nota> listarNotas();
}
