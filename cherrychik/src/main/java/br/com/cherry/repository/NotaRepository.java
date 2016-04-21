package br.com.cherry.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.cherry.model.Nota;

@Repository
public interface NotaRepository extends JpaRepository<Nota, Long>{

}
