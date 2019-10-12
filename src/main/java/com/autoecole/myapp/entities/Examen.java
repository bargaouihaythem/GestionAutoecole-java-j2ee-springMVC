package com.autoecole.myapp.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.AbstractPersistable;
@Entity
@Table(name="examen")
public class Examen extends AbstractPersistable<Long> implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	

public Examen(Date datedebutExam, Date datefinExam, String type, Boolean resultat, Condidat condidat,
			Moniteur moniteur) {
		super();
		this.datedebutExam = datedebutExam;
		this.datefinExam = datefinExam;
		this.type = type;
		this.resultat = resultat;
		this.condidat = condidat;
		this.moniteur = moniteur;
	}

public Examen() {
	super();

}


private Date datedebutExam;
private Date datefinExam;
private String type;
private Boolean resultat;



@ManyToOne
@JoinColumn(name="id_condidat")
private Condidat condidat;


@ManyToOne
@JoinColumn(name="id_moniteur")
private Moniteur moniteur;


public Date getDatedebutExam() {
	return datedebutExam;
}


public void setDatedebutExam(Date datedebutExam) {
	this.datedebutExam = datedebutExam;
}


public Date getDatefinExam() {
	return datefinExam;
}


public void setDatefinExam(Date datefinExam) {
	this.datefinExam = datefinExam;
}


public String getType() {
	return type;
}


public void setType(String type) {
	this.type = type;
}


public Boolean getResultat() {
	return resultat;
}


public void setResultat(Boolean resultat) {
	this.resultat = resultat;
}


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





}
