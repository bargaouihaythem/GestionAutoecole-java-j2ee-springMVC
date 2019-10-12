package com.autoecole.myapp.model;

public class ExamModel {
	
	
	String candidat;
	String moniteur;
	String resultat;
	String type;
	public String getCandidat() {
		return candidat;
	}
	public void setCandidat(String candidat) {
		this.candidat = candidat;
	}
	public String getMoniteur() {
		return moniteur;
	}
	public void setMoniteur(String moniteur) {
		this.moniteur = moniteur;
	}
	public String getResultat() {
		return resultat;
	}
	public void setResultat(String resultat) {
		this.resultat = resultat;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getHeuredeb() {
		return heuredeb;
	}
	public void setHeuredeb(String heuredeb) {
		this.heuredeb = heuredeb;
	}
	public String getHeurefin() {
		return heurefin;
	}
	public void setHeurefin(String heurefin) {
		this.heurefin = heurefin;
	}
	String heuredeb;
	String heurefin;

}
