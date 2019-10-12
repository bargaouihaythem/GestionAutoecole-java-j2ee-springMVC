package com.autoecole.myapp.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.AbstractPersistable;


@Entity
@Table(name="autoecole")
public class AutoEcole extends AbstractPersistable<Long> {

	/**
	 * 
	 */
	private static final long serialVersionUID = -144376103798121350L;
	
	
	
	
	@Column(name="nom")
	private String nom ;
	
	
	@Column(name="adresse")
	private String adresse ;
	
	
	@Column(name="ville")
	private String ville ;
	
	
	
	@Column(name="nrotel")
	private String nrotel ;
	
	
	
	@Column(name="email")
	private String email ;
	
	
	
	@Column(name="codePostal")
	private String codePostal ;



	public String getNom() {
		return nom;
	}



	public void setNom(String nom) {
		this.nom = nom;
	}



	public String getAdresse() {
		return adresse;
	}



	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}



	public String getVille() {
		return ville;
	}



	public void setVille(String ville) {
		this.ville = ville;
	}



	public String getNrotel() {
		return nrotel;
	}



	public void setNrotel(String nrotel) {
		this.nrotel = nrotel;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getCodePostal() {
		return codePostal;
	}



	public void setCodePostal(String codePostal) {
		this.codePostal = codePostal;
	}
	
	
	

}
