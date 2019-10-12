package com.autoecole.myapp.metier;

import java.util.Date;
import java.util.List;
import java.util.logging.Logger;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.autoecole.myapp.dao.CondidatDAO;
import com.autoecole.myapp.dao.ExamDAO;
import com.autoecole.myapp.dao.MoniteurDAO;
import com.autoecole.myapp.entities.Condidat;
import com.autoecole.myapp.entities.Examen;
import com.autoecole.myapp.entities.Moniteur;

@Service
public class ExamenServices {
	
	private static final Logger LoggerFactory = null;
	private static final Logger logger = Logger.getAnonymousLogger();
	
	@Resource
	private ExamDAO repository ;
	
	@Resource
	private CondidatDAO candidatrepository ;
	
	
	@Resource
	private MoniteurDAO moniteurrepository ;
	
	
	public Examen getbyid(Long id){
		
		return repository.findOne(id);
		
		
	}
	
	
	
	public Examen create(Date datedeb ,Date datefin ,String type ,String resultat ,String candidat ,String moniteur ){
		
		Condidat candid = candidatrepository.findOne(Long.parseLong(candidat));
		Moniteur monit = moniteurrepository.findOne(Long.parseLong(moniteur));
		logger.info("moniteur to add"+monit.getId());
		Boolean result = true ;
		if(Long.parseLong(resultat) == 0 ){
			
			result = false ;	
			
		}
		Examen exam = new Examen(datedeb, datefin, type, result, candid, monit);
		return repository.saveAndFlush(exam);
		
		
	}
	public List<Examen> listAll(){
		
		return repository.findAll() ;
	}

}
