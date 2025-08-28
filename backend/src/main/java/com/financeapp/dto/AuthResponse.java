package com.financeapp.dto;

import com.financeapp.entity.User;

public class AuthResponse {
    
    private String token;
    private String message;
    private UserInfo user;
    
    // Constructors
    public AuthResponse() {}
    
    public AuthResponse(String token, String message, User user) {
        this.token = token;
        this.message = message;
        this.user = new UserInfo(user.getId().toString(), user.getUsername(), user.getEmail(), user.getRole().name());
    }
    
    public AuthResponse(String token, String message, String username, String role) {
        this.token = token;
        this.message = message;
        this.user = new UserInfo(null, username, null, role);
    }
    
    // Getters and Setters
    public String getToken() {
        return token;
    }
    
    public void setToken(String token) {
        this.token = token;
    }
    
    public String getMessage() {
        return message;
    }
    
    public void setMessage(String message) {
        this.message = message;
    }
    
    public UserInfo getUser() {
        return user;
    }
    
    public void setUser(UserInfo user) {
        this.user = user;
    }
    
    // Nested UserInfo class
    public static class UserInfo {
        private String id;
        private String username;
        private String email;
        private String role;
        
        public UserInfo() {}
        
        public UserInfo(String id, String username, String email, String role) {
            this.id = id;
            this.username = username;
            this.email = email;
            this.role = role;
        }
        
        // Getters and Setters
        public String getId() {
            return id;
        }
        
        public void setId(String id) {
            this.id = id;
        }
        
        public String getUsername() {
            return username;
        }
        
        public void setUsername(String username) {
            this.username = username;
        }
        
        public String getEmail() {
            return email;
        }
        
        public void setEmail(String email) {
            this.email = email;
        }
        
        public String getRole() {
            return role;
        }
        
        public void setRole(String role) {
            this.role = role;
        }
    }
}

