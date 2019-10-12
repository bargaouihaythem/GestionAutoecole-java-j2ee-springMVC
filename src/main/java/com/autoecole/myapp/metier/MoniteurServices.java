package com.autoecole.myapp.metier;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.autoecole.myapp.dao.MoniteurDAO;
import com.autoecole.myapp.dao.UserDAO;
import com.autoecole.myapp.entities.Moniteur;
import com.autoecole.myapp.entities.User;

@Service
public class MoniteurServices {
	
	
	@Resource
	private MoniteurDAO respository ;
	
	@Resource
	private UserDAO userrespository ;
	
	
	public List<Moniteur> list(){
		
		
		return respository.findAll();
	}
	public void delete(Long id){
		
		Moniteur monit = respository.findOne(id);
		User us = userrespository.findOne(monit.getUserid().getId());
		respository.delete(monit);
		userrespository.delete(us);
		
		
	}
	
	public Moniteur getbyid(Long id){
		return respository.findOne(id);
		
	}
	
	public Moniteur getbyuser(Long id){
		User us = userrespository.findOne(id);
		
		return respository.findByUserid(us);
		
	}
	
	

}
