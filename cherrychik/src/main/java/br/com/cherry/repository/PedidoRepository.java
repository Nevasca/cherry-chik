package br.com.cherry.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.cherry.model.Pedido;
import br.com.cherry.model.PedidoRelatorio;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Long>{
	
	//Agrupa por mes e popula com o total geral e total valor
	@Query("Select new br.com.cherry.model.PedidoRelatorio("
			+ "p.data, "
			+ "count(p.id), "
			+ "sum(p.total)) "
			+ "from Pedido p "
			+ "group by year(p.data), month(p.data)")
	List<PedidoRelatorio> relatorio();
	
	List<Pedido> findAllByOrderByIdDesc();
	
	@Query("Select p "			
			+ "from Pedido p "
			+ "where date_format(p.data, '%Y %m %d') = date_format(?1, '%Y %m %d') "
			+ "order by p.id desc")
	List<Pedido> listarPedidosPorData(Date data);
}
