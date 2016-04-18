package br.com.nixtor.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.nixtor.model.Pedido;
import br.com.nixtor.repository.PedidoRepository;

@Service
public class PedidoServiceImpl implements PedidoService {

	@Autowired
	private PedidoRepository pedidoRepository;
	
	@Transactional
	public Pedido salvar(Pedido pedido) {		
		return pedidoRepository.save(pedido);
	}

	public List<Pedido> listarPedidos() { 
		return pedidoRepository.findAll();
	}

}
