package br.com.nixtor.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.nixtor.model.Enderecador;

@Repository
public interface EnderecadorRepository extends JpaRepository<Enderecador, Long>{

}
