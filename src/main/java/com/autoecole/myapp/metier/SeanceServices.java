package com.autoecole.myapp.metier;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.autoecole.myapp.dao.CondidatDAO;
import com.autoecole.myapp.dao.MoniteurDAO;
import com.autoecole.myapp.dao.SeanceDAO;
import com.autoecole.myapp.dao.UserDAO;
import com.autoecole.myapp.dao.VehiculeDAO;
import com.autoecole.myapp.entities.Condidat;
import com.autoecole.myapp.entities.Moniteur;
import com.autoecole.myapp.entities.Seance;
import com.autoecole.myapp.entities.User;
import com.autoecole.myapp.entities.Vehicule;

@Service
public class SeanceServices {

	@Resource
	private SeanceDAO repository;

	@Resource
	private UserDAO userrepository;
	
	@Resource
	private CondidatDAO candidatrepository ;
	
	
	@Resource
	private MoniteurDAO moniteurrepository ;

	@Resource
	private VehiculeDAO vehiculerepository;

	public Seance getbyid(Long id) {

		return repository.findOne(id);

	}

	public Seance create(Date date_seance, Date heure_deb, Date heure_fin, String statut, Long condidat, Long vehicule,
			Long moniteur) {

		Condidat candid = candidatrepository.findOne(condidat);
		Moniteur monit = moniteurrepository.findOne(moniteur);
		Vehicule vehic = vehiculerepository.findOne(vehicule);
		Seance seance = new Seance(date_seance, heure_deb, heure_fin, statut, candid, vehic, monit);

		return repository.saveAndFlush(seance);

	}

	public Seance update(Long idseance, Date date_seance, Date heure_deb, Date heure_fin, String condidat, String vehicule,
			String moniteur) {

		Seance seance = repository.findOne(idseance);

		if (date_seance != null) {
			seance.setDate_seance(date_seance);
		}

		if (heure_deb != null) {

			seance.setHeure_deb(heure_deb);
		}

		if (heure_fin != null) {
			seance.setHeure_fin(heure_fin);

		}

		if ((condidat.length() > 0) && (condidat != null)) {
			
			Condidat candid = candidatrepository.findOne(Long.parseLong(condidat));
			seance.setCondidat(candid);

		}

		if ((moniteur.length() > 0) && (moniteur != null)) {

			Moniteur monit = moniteurrepository.findOne(Long.parseLong(moniteur));
			seance.setMoniteur(monit);
		}

		if ((vehicule.length() > 0) && (vehicule != null)) {

			Vehicule vehic = vehiculerepository.findOne(Long.parseLong(vehicule));
			seance.setVehicule(vehic);
		}

		

		return repository.saveAndFlush(seance);

	}

	public List<Seance> lisAll() {
		return repository.findAll();

	}
	
	public List<Seance> listbyMoniteur(Long id) {
		Moniteur monit = moniteurrepository.findOne(id);
		
		return repository.findByMoniteur(monit);

	}
	
	public List<Seance> listbyCondidat(Long id) {
		Condidat candid = candidatrepository.findOne(id);
		return repository.findByCondidat(candid);

	}

	public void delete(Long id) {
		Seance seance = repository.findOne(id);
		repository.delete(seance);

	}

}
