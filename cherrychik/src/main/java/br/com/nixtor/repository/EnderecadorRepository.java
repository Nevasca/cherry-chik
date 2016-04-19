package br.com.nixtor.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.nixtor.model.Enderecador;
import br.com.nixtor.model.EnderecadorRelatorio;

@Repository
public interface EnderecadorRepository extends JpaRepository<Enderecador, Long>{
	
	List<Enderecador> findByPedido(String pedido);
	
	//Agrupa por mes e popula com o total geral e total de cada tipo de frete
	@Query("Select new br.com.nixtor.model.EnderecadorRelatorio("
			+ "month(e.data), "
			+ "count(e.id), "
			+ "sum(case when e.tipo = 'SEDEX' then 1 else 0 end), "
			+ "sum(case when e.tipo = 'PAC' then 1 else 0 end)) " +
			"from Enderecador e group by month(e.data)")
	List<EnderecadorRelatorio> relatorio();

}
