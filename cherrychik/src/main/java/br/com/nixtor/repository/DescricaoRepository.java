package br.com.nixtor.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.nixtor.model.Descricao;

@Repository
public interface DescricaoRepository extends JpaRepository<Descricao, Long>{

}
