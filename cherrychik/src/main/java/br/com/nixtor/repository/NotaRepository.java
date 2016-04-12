package br.com.nixtor.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.nixtor.model.Nota;

@Repository
public interface NotaRepository extends JpaRepository<Nota, Long>{

}
