package com.klu.LearningHub;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudService {
    @Autowired
    private StudRep repo;

    public void saveStudent(Student s) {
        s.setSid(generateStudentId());
        repo.save(s);
    }

    public Optional<Student> validateStudent(String email, String password) {
        return repo.findByEmailAndPassword(email, password);
    }

    private String generateStudentId() {
        Integer maxId = repo.findMaxStudentIdNumber();
        int nextId = (maxId != null) ? maxId + 1 : 101;
        return "sid" + nextId;
    }
}
