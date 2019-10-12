package com.autoecole.myapp.metier;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.autoecole.myapp.dao.AutoEcoleDAO;
import com.autoecole.myapp.entities.AutoEcole;



@Service
public class AutoEcolesevices {

	@Resource
	private AutoEcoleDAO repository ;
	
	

	public AutoEcole getbyid(Long id) {
		AutoEcole auto = repository.findOne(id);
		return auto;
	}


	
	public List<AutoEcole> list() {
		
		return repository.findAll();
	}

}
