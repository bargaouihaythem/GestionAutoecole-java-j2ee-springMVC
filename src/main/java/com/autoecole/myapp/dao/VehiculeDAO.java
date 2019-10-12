package com.autoecole.myapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.autoecole.myapp.entities.Vehicule;



@Repository
public interface VehiculeDAO extends JpaRepository<Vehicule, Long> {

}
