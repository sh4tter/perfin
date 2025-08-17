package com.financeapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FinanceTrackerApplication {

    public static void main(String[] args) {
        // Set default profile to render if not specified
        if (System.getProperty("spring.profiles.active") == null) {
            System.setProperty("spring.profiles.active", "render");
        }
        SpringApplication.run(FinanceTrackerApplication.class, args);
    }
}

