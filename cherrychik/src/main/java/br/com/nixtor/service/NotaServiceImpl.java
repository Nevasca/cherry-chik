package br.com.nixtor.service;

import java.util.List;

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
	public Nota salvar(Nota nota) {
		return notaRepository.save(nota);
	}

	public List<Nota> listarNotas() {
		return notaRepository.findAll();
	}
	
	public Nota buscarPorId(Long id) {
		return notaRepository.findOne(id);
	}
	
	public void deletar(Long id) {
		notaRepository.delete(id);
	}

}
