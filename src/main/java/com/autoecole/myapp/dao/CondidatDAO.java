package com.autoecole.myapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.autoecole.myapp.entities.Condidat;
import com.autoecole.myapp.entities.User;


@Repository
public interface CondidatDAO extends JpaRepository<Condidat, Long>{
	
	Condidat findByUserid(User user);

}
