package br.com.nixtor.service;

import java.util.List;

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

	public void deletar(Long id) {
		enderecadorRepository.delete(id);
	}

	public List<Enderecador> listarEnderecadores() {
		return enderecadorRepository.findAll();
	}

	public List<Enderecador> pesquisarEnderecador(Enderecador enderecador) {
		
		//Se foi digitado algo no pedido
		if(enderecador.getPedido().length() > 0) {
			return enderecadorRepository.findByPedido(enderecador.getPedido());
		}
		else {
			return listarEnderecadores();
		}		
	}

}
