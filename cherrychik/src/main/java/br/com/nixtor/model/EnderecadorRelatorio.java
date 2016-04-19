package br.com.nixtor.model;

public class EnderecadorRelatorio {

	private int mes;
	private long total;
	private long totalSedex;
	private long totalPac;
	
	public EnderecadorRelatorio(int mes, long total, long totalSedex, long totalPac) {
		this.mes = mes;
		this.total = total;
		this.totalSedex = totalSedex;
		this.totalPac = totalPac;
	}
	
	public int getMes() {
		return mes;
	}
	public void setMes(int mes) {
		this.mes = mes;
	}
	public long getTotal() {
		return total;
	}
	public void setTotal(long total) {
		this.total = total;
	}

	public long getTotalSedex() {
		return totalSedex;
	}

	public void setTotalSedex(long totalSedex) {
		this.totalSedex = totalSedex;
	}

	public long getTotalPac() {
		return totalPac;
	}

	public void setTotalPac(long totalPac) {
		this.totalPac = totalPac;
	}
	
}
