package com.autoecole.myapp.metier;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.autoecole.myapp.dao.VehiculeDAO;
import com.autoecole.myapp.entities.Vehicule;


@Service
public class VehiculeServices {
	
	
	@Resource
	private VehiculeDAO repository ;
	
	
	public List<Vehicule> listall(){
		
		return repository.findAll();
	}
	
	
	
	public Vehicule save(String matricule, String type,
			String marque, String couleur,String assurance){
		
		Vehicule vehicule = new Vehicule(matricule, type, marque, couleur,assurance);
		return repository.saveAndFlush(vehicule);
		
		
	}
	
	
	public Vehicule getbyid(Long id){
		
	
		return repository.findOne(id);
		
		
	}
	
	public void delete(Long id){
		
		Vehicule vehicule = getbyid(id);
		
		
		 repository.delete(vehicule);
		
		
	}
	
	public void update(Long id ,String matricule, String type,
			String marque, String couleur,String assurance){
		
		Vehicule vehicule = getbyid(id);
		
		vehicule.setAssurance(assurance);
		vehicule.setCouleur(couleur);
		vehicule.setMatricule(matricule);
		vehicule.setMarque(marque);
		vehicule.setModele(type);
		vehicule.setType(type);
		
		 repository.saveAndFlush(vehicule);
		
		
	}


}
