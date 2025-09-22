package com.klu.LearningHub;

import com.klu.LearningHub.InstService;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
public class LearnController {

    @Autowired
    private StudService studService;

    @Autowired
    private InstService instService;

    

    
    @PostMapping("/register")
    @ResponseBody
    public boolean registerSubmit(@RequestBody Student student,@RequestParam("role") String role) {
        try {
            
        	
            if (role.equalsIgnoreCase("Student")) {
                studService.saveStudent(student);  
                return true;  
            } else if (role.equalsIgnoreCase("Instructor")) {
                Instructor instructor = new Instructor();
                instructor.setName(student.getName());
                instructor.setDob(student.getDob());
                instructor.setGender(student.getGender());
                instructor.setCity(student.getCity());
                instructor.setEmail(student.getEmail());
                instructor.setPassword(student.getPassword());
                instService.saveInstructor(instructor);
                return true;  
            } else {
                return false;
            }
        } catch (Exception e) {
            return false;
            }
    }

  
	    @PostMapping("/login")
	    @ResponseBody
	    public Map<String, Object> login(@RequestParam("username") String username,
	                                     @RequestParam("password") String password) {
	        Map<String, Object> response = new HashMap<>();
	
	        var student = studService.validateStudent(username, password);
	        if (student.isPresent()) {
	            response.put("success", true);
	            response.put("role", "student");
	            
	            return response;
	        }
	
	        var instructor = instService.validateInstructor(username, password);
	        if (instructor.isPresent()) {
	            response.put("success", true);
	            response.put("role", "instructor");
	 
	            return response;
	        }
	
	        response.put("success", false);
	        return response;
	    }

}
