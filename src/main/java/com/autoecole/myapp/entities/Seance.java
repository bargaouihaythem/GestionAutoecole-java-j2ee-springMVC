package com.autoecole.myapp.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.AbstractPersistable;

@Entity
@Table(name = "seance")
public class Seance extends AbstractPersistable<Long> implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Date date_seance;
	private Date heure_deb;
	private Date heure_fin;
	private String statut;


	


	public Seance(Date date_seance, Date heure_deb, Date heure_fin, String statut, Condidat condidat, Vehicule vehicule,
			Moniteur moniteur) {
		super();
		this.date_seance = date_seance;
		this.heure_deb = heure_deb;
		this.heure_fin = heure_fin;
		this.statut = statut;
		this.condidat = condidat;
		this.vehicule = vehicule;
		this.moniteur = moniteur;
	}



	@ManyToOne
	@JoinColumn(name = "id_condidat")
	private Condidat condidat;
	
	
	
	@ManyToOne
	@JoinColumn(name = "id_vehicule")
	private Vehicule vehicule;
	
	


	public Condidat getCondidat() {
		return condidat;
	}

	public void setCondidat(Condidat condidat) {
		this.condidat = condidat;
	}

	public Moniteur getMoniteur() {
		return moniteur;
	}

	public void setMoniteur(Moniteur moniteur) {
		this.moniteur = moniteur;
	}

	public Vehicule getVehicule() {
		return vehicule;
	}

	public void setVehicule(Vehicule vehicule) {
		this.vehicule = vehicule;
	}



	@ManyToOne
	@JoinColumn(name = "id_moniteur")
	private Moniteur moniteur;


	public Date getDate_seance() {
		return date_seance;
	}

	public void setDate_seance(Date date_seance) {
		this.date_seance = date_seance;
	}

	

	public Date getHeure_deb() {
		return heure_deb;
	}

	public void setHeure_deb(Date heure_deb) {
		this.heure_deb = heure_deb;
	}

	public Date getHeure_fin() {
		return heure_fin;
	}

	public void setHeure_fin(Date heure_fin) {
		this.heure_fin = heure_fin;
	}

	public String getStatut() {
		return statut;
	}

	public void setStatut(String statut) {
		this.statut = statut;
	}

	public Seance() {
		super();
		// TODO Auto-generated constructor stub
	}


}
