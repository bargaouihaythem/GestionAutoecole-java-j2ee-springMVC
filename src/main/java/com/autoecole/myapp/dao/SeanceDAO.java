package com.autoecole.myapp.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.autoecole.myapp.entities.Condidat;
import com.autoecole.myapp.entities.Moniteur;
import com.autoecole.myapp.entities.Seance;


@Repository
public interface SeanceDAO extends JpaRepository<Seance, Long>{
	
	List<Seance> findByCondidat(Condidat condidat);
	List<Seance> findByMoniteur(Moniteur moniteur);

}
