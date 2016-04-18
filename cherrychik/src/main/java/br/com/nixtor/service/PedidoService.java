package br.com.nixtor.service;

import java.util.List;

import br.com.nixtor.model.Pedido;

public interface PedidoService {
	
	Pedido salvar(Pedido pedido);
	List<Pedido> listarPedidos();
	
}
