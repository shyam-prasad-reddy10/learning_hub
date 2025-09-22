package com.klu.LearningHub;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface StudRep extends JpaRepository<Student, String> {
	Optional<Student> findByEmailAndPassword(String email, String password);

	    @Query("SELECT MAX(CAST(SUBSTRING(s.sid, 4) AS int)) FROM Student s")
	    Integer findMaxStudentIdNumber();
   
}
