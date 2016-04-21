package br.com.cherry.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.cherry.model.Descricao;

@Repository
public interface DescricaoRepository extends JpaRepository<Descricao, Long>{

}
