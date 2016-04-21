package br.com.nixtor.service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.nixtor.model.Enderecador;
import br.com.nixtor.model.EnderecadorRelatorio;
import br.com.nixtor.repository.EnderecadorRepository;

@Service
public class EnderecadorServiceImpl implements EnderecadorService {

	@Autowired
	EnderecadorRepository enderecadorRepository;
	
	@Transactional
	public Enderecador salvar(Enderecador enderecador) {
		if(enderecador.getId() == null) { //Se for um novo enderecador, setar a data atual
			enderecador.setData(new Timestamp(new Date().getTime()));
		}
		return enderecadorRepository.save(enderecador);
	}

	public void deletar(Long id) {
		enderecadorRepository.delete(id);
	}

	public List<Enderecador> listarEnderecadores() {
		return enderecadorRepository.findAllByOrderByIdDesc();
	}

	public List<EnderecadorRelatorio> relatorio() {
		return enderecadorRepository.relatorio();
	}

	public List<Enderecador> listarEnderecadoresPorData(Date data) {
		return enderecadorRepository.listarEnderecadoresPorData(data);
	}

}
