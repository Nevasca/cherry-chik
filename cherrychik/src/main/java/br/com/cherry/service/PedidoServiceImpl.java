package br.com.cherry.service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.cherry.model.Pedido;
import br.com.cherry.model.PedidoRelatorio;
import br.com.cherry.repository.PedidoRepository;
import br.com.cherry.util.Email;

@Service
public class PedidoServiceImpl implements PedidoService {

	@Autowired
	private PedidoRepository pedidoRepository;
	@Autowired
	private Email email;
	
	@Transactional
	public Pedido salvar(Pedido pedido) {		
		if(pedido.getId() == null) { //Se for um novo pedido, setar a data atual e mandar um email
			email.novoEmailPedido(pedido);
			pedido.setData(new Timestamp(new Date().getTime()));
		}
		
		return pedidoRepository.save(pedido);
	}

	public List<Pedido> listarPedidos() { 
		return pedidoRepository.findAllByOrderByIdDesc();
	}

	public Pedido buscarPorId(Long id) { 
		return pedidoRepository.findOne(id);		
	}

	public List<PedidoRelatorio> relatorio() {
		
		return pedidoRepository.relatorio();
	}

	public List<Pedido> listarPedidosPorData(Date data) {
		return pedidoRepository.listarPedidosPorData(data);
	}

//	public double calcularTotal(List<Item> itens) {
//		double total = 0;
//		
//		for(int i = 0; i < itens.size(); i++) {
//			total += calcularSubTotal(itens.get(i));
//		}
//		
//		return total;
//	}
//
//	public double calcularSubTotal(Item item) {
//		return item.getQuantidade() * item.getProduto().getPreco();		
//	}

}
