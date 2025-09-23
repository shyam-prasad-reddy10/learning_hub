package com.klu.LearningHub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class LearningHubApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(LearningHubApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(LearningHubApplication.class, args);
        System.out.println("Welcome to Learning Hub");
    }
}
