package br.com.cherry.model;

import java.util.Date;

public class PedidoRelatorio {

	private Date data;	
	private long total;
	private double faturamento;

	public PedidoRelatorio(Date data, long total, double faturamento) {
		this.data = data;		
		this.total = total;
		this.faturamento = faturamento;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public double getFaturamento() {
		return faturamento;
	}

	public void setFaturamento(double faturamento) {
		this.faturamento = faturamento;
	}

	public long getTotal() {
		return total;
	}

	public void setTotal(long total) {
		this.total = total;
	}

}
