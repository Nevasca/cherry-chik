package br.com.nixtor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.nixtor.model.Enderecador;
import br.com.nixtor.repository.EnderecadorRepository;

@Service
public class EnderecadorServiceImpl implements EnderecadorService {

	@Autowired
	EnderecadorRepository enderecadorRepository;
	
	@Transactional
	public Enderecador salvar(Enderecador enderecador) {
		return enderecadorRepository.save(enderecador);
	}

}
