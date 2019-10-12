package com.autoecole.myapp.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.springframework.data.jpa.domain.AbstractPersistable;



@Entity
@Table(name="vehicule")
public class Vehicule extends AbstractPersistable<Long> implements Serializable {
	
	private static final long serialVersionUID = 1L;

	private String matricule;
	private String modele;
	private String type;
	private String marque;
	private String couleur;
	public Vehicule() {
		super();
	}

	private String etat;
	private String assurance;
	private String visite;
	private String jour_rapelle;
	@Lob
	@Column(name = "image")
	@Size(max = 2000000000)
	private byte[] image;
	

	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	public String getModele() {
		return modele;
	}
	public void setModele(String modele) {
		this.modele = modele;
	}
	public String getAssurance() {
		return assurance;
	}
	public void setAssurance(String assurance) {
		this.assurance = assurance;
	}
	public String getVisite() {
		return visite;
	}
	public void setVisite(String visite) {
		this.visite = visite;
	}
	public String getJour_rapelle() {
		return jour_rapelle;
	}
	public void setJour_rapelle(String jour_rapelle) {
		this.jour_rapelle = jour_rapelle;
	}
	public String getMatricule() {
		return matricule;
	}
	public void setMatricule(String matricule) {
		this.matricule = matricule;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getMarque() {
		return marque;
	}
	public void setMarque(String marque) {
		this.marque = marque;
	}
	public String getCouleur() {
		return couleur;
	}
	public void setCouleur(String couleur) {
		this.couleur = couleur;
	}
	public String getEtat() {
		return etat;
	}
	public void setEtat(String etat) {
		this.etat = etat;
	}

	public Vehicule( String matricule, String modele,
			String marque, String couleur,String assurance) {
		super();

		this.matricule = matricule;
		this.modele = modele;
		this.marque = marque;
		this.couleur = couleur;
		this.assurance = assurance;
		this.type = modele ;
		this.etat = "1" ;
	
		
	}
	

}
