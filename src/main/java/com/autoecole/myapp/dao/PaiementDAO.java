package com.autoecole.myapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.autoecole.myapp.entities.Payement;


@Repository
public interface PaiementDAO extends JpaRepository<Payement, Long>{

}
