package com.autoecole.myapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.autoecole.myapp.entities.Examen;


@Repository
public interface ExamDAO extends JpaRepository<Examen, Long>{

}
