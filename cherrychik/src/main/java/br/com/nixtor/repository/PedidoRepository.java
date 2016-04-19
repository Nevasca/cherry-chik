package br.com.nixtor.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.nixtor.model.Pedido;
import br.com.nixtor.model.PedidoRelatorio;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Long>{
	
	//Agrupa por mes e popula com o total geral e total valor
	@Query("Select new br.com.nixtor.model.PedidoRelatorio("
			+ "p.data, "
			+ "count(p.id), "
			+ "sum(p.total)) "
			+ "from Pedido p "
			+ "group by month(p.data)")
	List<PedidoRelatorio> relatorio();
	

}
