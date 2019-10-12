package com.autoecole.myapp.metier;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.autoecole.myapp.dao.CondidatDAO;
import com.autoecole.myapp.dao.MoniteurDAO;
import com.autoecole.myapp.dao.PaiementDAO;
import com.autoecole.myapp.entities.Condidat;
import com.autoecole.myapp.entities.Moniteur;
import com.autoecole.myapp.entities.Payement;
import com.autoecole.myapp.entities.User;

@Service
public class PaiementServices {
	
	
	@Resource
	private PaiementDAO repository ;
	
	@Resource
	private MoniteurDAO monitrepository ;
	
	@Resource
	private CondidatDAO condidrepository ;
	
	
	public List<Payement> listAll(){
		
		return repository.findAll() ;
	}
	
	public Payement create(Long condidatid, Long moniteurid, int total_conduit, double montant_total, int nbseance){
		
		Moniteur moniteur = monitrepository.findOne(moniteurid);
		Condidat condidat = condidrepository.findOne(condidatid);
		Payement pay = new Payement(condidat, moniteur, total_conduit, montant_total, nbseance);
		return repository.saveAndFlush(pay);
	}

}
