package com.autoecole.myapp.metier;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.autoecole.myapp.dao.RoleDAO;
import com.autoecole.myapp.entities.Roles;


@Service
public class RoleServices {
	
	
	@Resource
	private RoleDAO repository ;
	
	

	public Roles getbyid(Long id) {
	Roles role = repository.findOne(id);
		return role;
	}


	
	public List<Roles> list() {
		
		return repository.findAll();
	}

}
