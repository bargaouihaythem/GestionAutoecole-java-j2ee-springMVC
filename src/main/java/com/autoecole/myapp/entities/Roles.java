package com.autoecole.myapp.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.AbstractPersistable;



@Entity
@Table(name="roles")
public class Roles extends AbstractPersistable<Long>{

	/**
	 * 
	 */

	/**
	 * 
	 */
	private static final long serialVersionUID = -5816974045321115860L;
	
	
	@Column(name="rolename")
	private String rolename ;


	public String getRolename() {
		return rolename;
	}


	public void setRolename(String rolename) {
		this.rolename = rolename;
	}
	
	

}
