package br.com.nixtor.service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.nixtor.model.Pedido;
import br.com.nixtor.model.PedidoRelatorio;
import br.com.nixtor.repository.PedidoRepository;
import br.com.nixtor.util.Email;

@Service
public class PedidoServiceImpl implements PedidoService {

	@Autowired
	private PedidoRepository pedidoRepository;
	@Autowired
	private Email email;
	
	@Transactional
	public Pedido salvar(Pedido pedido) {		
		if(pedido.isNotaFiscal()) {
			//email.novoEmailPedido(pedido);
		}
		
		if(pedido.getId() == null) { //Se for um novo pedido, setar a data atual
			pedido.setData(new Timestamp(new Date().getTime()));
		}
		
		return pedidoRepository.save(pedido);
	}

	public List<Pedido> listarPedidos() { 
		return pedidoRepository.findAll();
	}

	public Pedido buscarPorId(Long id) { 
		return pedidoRepository.findOne(id);
	}

	public List<PedidoRelatorio> relatorio() {
		
		return pedidoRepository.relatorio();
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
