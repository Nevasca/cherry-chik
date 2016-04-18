package br.com.nixtor.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.nixtor.model.Pedido;
import br.com.nixtor.service.PedidoService;

@RestController
public class PedidoController {
	
	private static final String URL = "/api/pedido/";
	@Autowired
	private PedidoService pedidoService;

	@RequestMapping(value = URL, method = RequestMethod.POST)
	public ResponseEntity<Pedido> salvarPedido(@RequestBody Pedido pedido) {
		
		Pedido pedidoSalvo = pedidoService.salvar(pedido);		
		return new ResponseEntity<Pedido>(pedidoSalvo, HttpStatus.OK);
	}
	
	@RequestMapping(value = URL, method = RequestMethod.GET)
	public ResponseEntity<List<Pedido>> listarPedidos() {
		
		List<Pedido> pedidos = pedidoService.listarPedidos();
		return new ResponseEntity<List<Pedido>>(pedidos, HttpStatus.OK);
	}
}
