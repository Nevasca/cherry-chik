package br.com.nixtor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.nixtor.model.Nota;
import br.com.nixtor.repository.NotaRepository;

@Service
public class NotaServiceImpl implements NotaService {

	@Autowired
	NotaRepository notaRepository;
	
	@Transactional
	public Nota save(Nota nota) {
		return notaRepository.save(nota);
	}

}
