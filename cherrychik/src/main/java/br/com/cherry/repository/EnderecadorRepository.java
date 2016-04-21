package br.com.cherry.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.cherry.model.Enderecador;
import br.com.cherry.model.EnderecadorRelatorio;

@Repository
public interface EnderecadorRepository extends JpaRepository<Enderecador, Long>{
	
	@Query("Select e "			
			+ "from Enderecador e "
			+ "where date_format(e.data, '%Y %m %d') = date_format(?1, '%Y %m %d') "
			+ "order by e.id desc")
	List<Enderecador> listarEnderecadoresPorData(Date data);
	
	//Agrupa por mes e popula com o total geral e total de cada tipo de frete
	@Query("Select new br.com.cherry.model.EnderecadorRelatorio("
			+ "e.data, "
			+ "count(e.id), "
			+ "sum(case when e.tipo = 'SEDEX' then 1 else 0 end), "
			+ "sum(case when e.tipo = 'PAC' then 1 else 0 end)) " +
			"from Enderecador e group by year(e.data), month(e.data)")
	List<EnderecadorRelatorio> relatorio();
	
	List<Enderecador> findAllByOrderByIdDesc();

}
