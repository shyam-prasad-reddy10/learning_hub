package com.klu.LearningHub;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Instructor {

    @Id
    private String eid;
    private String name;
    private String dob;
    private char gender;
    private String city;
    private String email;
    private String password;

    // Default constructor
    public Instructor() {}

    // Parameterized constructor
    public Instructor(String eid, String name, String dob, char gender, String city, String email, String password) {
    	super();
        this.eid = eid;
        this.name = name;
        this.dob = dob;
        this.gender = gender;
        this.city = city;
        this.email = email;
        this.password = password;
    }

    // Getters and Setters
    public String getEid() { return eid; }
    public void setEid(String eid) { this.eid = eid; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getDob() { return dob; }
    public void setDob(String dob) { this.dob = dob; }
    public char getGender() { return gender; }
    public void setGender(char gender) { this.gender = gender; }
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
