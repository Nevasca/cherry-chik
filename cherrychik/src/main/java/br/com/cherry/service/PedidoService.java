package br.com.cherry.service;

import java.util.Date;
import java.util.List;

import br.com.cherry.model.Pedido;
import br.com.cherry.model.PedidoRelatorio;

public interface PedidoService {
	
	Pedido salvar(Pedido pedido);
	List<Pedido> listarPedidos();
	Pedido buscarPorId(Long id);
	List<PedidoRelatorio> relatorio();
	List<Pedido> listarPedidosPorData(Date data);
//	double calcularTotal(List<Item> itens);
//	double calcularSubTotal(Item item);
}
