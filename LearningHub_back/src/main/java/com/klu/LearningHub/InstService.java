package com.klu.LearningHub;


import com.klu.LearningHub.InstRep;
import com.klu.LearningHub.Instructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class InstService {

    @Autowired
    private InstRep repo;

    // Save instructor with generated ID
    public void saveInstructor(Instructor instructor) {
        instructor.setEid(generateInstructorId());
        repo.save(instructor);
    }
    
    // Validate instructor's email and password
    public Optional<Instructor> validateInstructor(String email, String password) {
        return repo.findByEmailAndPassword(email, password);
    }

    // Generate unique instructor ID
    private synchronized String generateInstructorId() {
        Integer maxId = repo.findMaxInstructorIdNumber();
        int nextId = (maxId != null) ? maxId + 1 : 101;
        return "eid" + nextId;
    }
}
