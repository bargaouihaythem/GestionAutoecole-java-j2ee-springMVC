package com.autoecole.myapp.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Size;

import org.springframework.data.jpa.domain.AbstractPersistable;


@Entity
@Table(name="user" , uniqueConstraints = @UniqueConstraint(columnNames = {"username","password"}))
public class User extends AbstractPersistable<Long>{

	/**
	 * 
	 */
	private static final long serialVersionUID = 5942092890325064503L;
	
	public User() {
		super();
	}



	@Column(name="nom")
	private String nom ;
	
	public byte[] getImage() {
		return image;
	}



	public void setImage(byte[] image) {
		this.image = image;
	}



	@Lob
	@Column(name = "image")
	@Size(max = 2000000000)
	private byte[] image;
	
	
	public User(String nom, String prenom, Date dateNaiss, String sexe,
			String adresse, String nrotel, String cin, String email,
			String username, String password, Roles role, AutoEcole autoecole) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.dateNaiss = dateNaiss;
		this.sexe = sexe;
		this.adresse = adresse;
		this.nrotel = nrotel;
		this.cin = cin;
		this.email = email;
		this.username = username;
		this.password = password;
		this.role = role;
		this.autoecole = autoecole;
	}



	@Column(name="prenom")
	private String prenom ;
	
	
	private Date dateNaiss;
	
	private String sexe;
	private String adresse;
	
	
	
	public Date getDateNaiss() {
		return dateNaiss;
	}



	public void setDateNaiss(Date dateNaiss) {
		this.dateNaiss = dateNaiss;
	}



	



	public String getSexe() {
		return sexe;
	}



	public void setSexe(String sexe) {
		this.sexe = sexe;
	}



	public String getAdresse() {
		return adresse;
	}



	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}



	@Column(name="nrotel")
	private String nrotel ;
	
	
	@Column(name="cin")
	private String cin ;
	
	

	@Column(name="email")
	private String email ;
	
	@Column(name="username")
	private String username ;
	
	
	@Column(name="password")
	private String password ;

	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getCin() {
		return cin;
	}



	public void setCin(String cin) {
		this.cin = cin;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	@ManyToOne(optional = true)
	@JoinColumn(name = "role_id")
	private Roles role ;
	
	
	
	@ManyToOne(optional = true)
	@JoinColumn(name = "autoecole_id")
	private AutoEcole autoecole ;



	public AutoEcole getAutoecole() {
		return autoecole;
	}



	public void setAutoecole(AutoEcole autoecole) {
		this.autoecole = autoecole;
	}



	public String getNom() {
		return nom;
	}



	public void setNom(String nom) {
		this.nom = nom;
	}



	public String getPrenom() {
		return prenom;
	}



	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}



	public String getNrotel() {
		return nrotel;
	}



	public void setNrotel(String nrotel) {
		this.nrotel = nrotel;
	}



	public Roles getRole() {
		return role;
	}



	public void setRole(Roles role) {
		this.role = role;
	}
	
	
	

}
