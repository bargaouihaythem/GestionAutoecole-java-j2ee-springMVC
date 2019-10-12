package com.autoecole.myapp.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.AbstractPersistable;
@Entity
@Table(name="condidat")
public class Condidat extends AbstractPersistable<Long> implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
	
	public Condidat() {
		super();
		
	}
	
	

	public Condidat(User userid) {
		super();
		this.userid = userid;
	}


	@ManyToOne
	@JoinColumn(name = "id_user")
	private User userid;




	public User getUserid() {
		return userid;
	}


	public void setUserid(User userid) {
		this.userid = userid;
	}
	

	
	


}
