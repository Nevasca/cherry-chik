package br.com.nixtor.service;

import java.util.List;

import br.com.nixtor.model.Item;
import br.com.nixtor.model.Pedido;
import br.com.nixtor.model.PedidoRelatorio;

public interface PedidoService {
	
	Pedido salvar(Pedido pedido);
	List<Pedido> listarPedidos();
	Pedido buscarPorId(Long id);
	List<PedidoRelatorio> relatorio();
//	double calcularTotal(List<Item> itens);
//	double calcularSubTotal(Item item);
}
