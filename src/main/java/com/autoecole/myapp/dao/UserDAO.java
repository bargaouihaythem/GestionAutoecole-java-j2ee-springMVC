package com.autoecole.myapp.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.autoecole.myapp.entities.Roles;
import com.autoecole.myapp.entities.User;



@Repository
public interface UserDAO extends JpaRepository<User, Long> {
	
	User findByUsernameLike(String username);
	

	  @Query("select u from User u where u.sexe = ?1")
	  	List<User> findByEmailAddress(String sexe);
	  
	  	List<User> findByRole(Roles role);
	
	

	
	

}
