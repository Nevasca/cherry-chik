package br.com.nixtor.model;

import java.util.Date;

public class EnderecadorRelatorio {

	private Date data;
	private long total;
	private long totalSedex;
	private long totalPac;
	
	public EnderecadorRelatorio(Date data, long total, long totalSedex, long totalPac) {
		this.data = data;
		this.total = total;
		this.totalSedex = totalSedex;
		this.totalPac = totalPac;
	}
	
	public Date getData() {
		return data;
	}
	public void setData(Date data) {
		this.data = data;
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
