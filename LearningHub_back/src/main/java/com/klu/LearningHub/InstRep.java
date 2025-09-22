package com.klu.LearningHub;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface InstRep extends JpaRepository<Instructor, String> {
	Optional<Instructor> findByEmailAndPassword(String email, String password);
    @Query("SELECT MAX(CAST(SUBSTRING(i.eid, 4) AS int)) FROM Instructor i")
    Integer findMaxInstructorIdNumber();
}
