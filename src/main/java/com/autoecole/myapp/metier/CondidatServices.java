package com.autoecole.myapp.metier;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.autoecole.myapp.dao.CondidatDAO;
import com.autoecole.myapp.dao.UserDAO;
import com.autoecole.myapp.entities.Condidat;
import com.autoecole.myapp.entities.Moniteur;
import com.autoecole.myapp.entities.User;

@Service
public class CondidatServices {
	
	
	@Resource
	private CondidatDAO repository ;
	
	@Resource
	private UserDAO userrespository ;
	
	
	
	public List<Condidat> listAll(){
		
		return repository.findAll();
		
		
	}
	
	
	public Condidat getbyuser(Long id){
		User us = userrespository.findOne(id);
		
		return repository.findByUserid(us);
		
	}

}
