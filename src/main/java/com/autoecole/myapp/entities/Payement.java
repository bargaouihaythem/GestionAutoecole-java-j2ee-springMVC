package com.autoecole.myapp.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.AbstractPersistable;

@Entity
@Table(name = "payement")
public class Payement extends AbstractPersistable<Long> implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
	public Payement( ) {
		super();
		
	}



	public Payement(Condidat condidatid, Moniteur moniteurid, int total_conduit, double montant_total, int nbseance) {
		super();
		this.condidatid = condidatid;
		this.moniteurid = moniteurid;
		this.total_conduit = total_conduit;
		this.montant_total = montant_total;
		this.nbseance = nbseance;
	}



	public int getTotal_conduit() {
		return total_conduit;
	}
	public void setTotal_conduit(int total_conduit) {
		this.total_conduit = total_conduit;
	}
	public double getMontant_total() {
		return montant_total;
	}
	public void setMontant_total(double montant_total) {
		this.montant_total = montant_total;
	}
	public int getNbseance() {
		return nbseance;
	}
	public void setNbseance(int nbseance) {
		this.nbseance = nbseance;
	}
	public Condidat getCondidatid() {
		return condidatid;
	}



	public void setCondidatid(Condidat condidatid) {
		this.condidatid = condidatid;
	}



	public Moniteur getMoniteurid() {
		return moniteurid;
	}



	public void setMoniteurid(Moniteur moniteurid) {
		this.moniteurid = moniteurid;
	}
	@ManyToOne
	@JoinColumn(name = "id_condidat")
	private Condidat condidatid;
	
	
	@ManyToOne
	@JoinColumn(name = "id_moniteur")
	private Moniteur moniteurid;

	private int total_conduit;// methode
	private double montant_total;// methode
	private int nbseance;


}
