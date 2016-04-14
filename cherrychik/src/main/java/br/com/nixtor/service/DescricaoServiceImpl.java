package br.com.nixtor.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.nixtor.model.Descricao;
import br.com.nixtor.repository.DescricaoRepository;

@Service
public class DescricaoServiceImpl implements DescricaoService {

	@Autowired
	private DescricaoRepository descricaoRepository;
	
	@Transactional
	public Descricao salvar(Descricao descricao) {
		return descricaoRepository.save(descricao);
	}

	public List<Descricao> listarDescricoes() {
		return descricaoRepository.findAll();
	}

	public void excluir(Long id) {
		descricaoRepository.delete(id);
	}

}
