package br.com.cherry.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.cherry.model.Pedido;
import br.com.cherry.model.PedidoRelatorio;
import br.com.cherry.service.PedidoService;

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
	
	@RequestMapping(value = URL + "{id}", method = RequestMethod.GET)
	public ResponseEntity<Pedido> listarPedidos(@PathVariable("id") Long id) {
		
		Pedido pedido = pedidoService.buscarPorId(id);
		return new ResponseEntity<Pedido>(pedido, HttpStatus.OK);
	}
	
	@RequestMapping(value = URL + "relatorio/", method = RequestMethod.GET)
	public ResponseEntity<List<PedidoRelatorio>> relatorio() {
		
		List<PedidoRelatorio> relatorio = pedidoService.relatorio();
		return new ResponseEntity<List<PedidoRelatorio>>(relatorio, HttpStatus.OK);
	}
	
	@RequestMapping(value = URL + "/filtro/", method = RequestMethod.POST)
	public ResponseEntity<List<Pedido>> listarPedidosPorData(@RequestBody Date data) {		
		List<Pedido> pedidos = pedidoService.listarPedidosPorData(data);
		return new ResponseEntity<List<Pedido>>(pedidos, HttpStatus.OK);
	}
}
