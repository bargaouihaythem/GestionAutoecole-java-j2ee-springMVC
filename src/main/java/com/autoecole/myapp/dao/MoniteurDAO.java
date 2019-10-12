package com.autoecole.myapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.autoecole.myapp.entities.Moniteur;
import com.autoecole.myapp.entities.User;


@Repository
public interface MoniteurDAO extends JpaRepository<Moniteur, Long> {
	Moniteur findByUserid(User user);

}
