package com.autoecole.myapp.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.AbstractPersistable;


@Entity
@Table(name="moniteur")
public class Moniteur extends AbstractPersistable<Long> implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public Moniteur() {
		super();

	}
	
	public Moniteur(User userid, int numCAP, Double salaire) {
		super();
		this.userid = userid;
		this.numCAP = numCAP;
		this.salaire = salaire;
	}


	@ManyToOne
	@JoinColumn(name = "id_user")
	private User userid;
	
	
	private int numCAP;
	
	
	private Double salaire;


	public User getUserid() {
		return userid;
	}


	public void setUserid(User userid) {
		this.userid = userid;
	}


	public int getNumCAP() {
		return numCAP;
	}


	public void setNumCAP(int numCAP) {
		this.numCAP = numCAP;
	}


	public Double getSalaire() {
		return salaire;
	}


	public void setSalaire(Double salaire) {
		this.salaire = salaire;
	}


	
    
    
    

	

}
