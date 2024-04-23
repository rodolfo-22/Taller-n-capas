package com.uca.auth.controllers;

import com.uca.auth.models.auth.AuthResponse;
import com.uca.auth.models.auth.LoginRequest;
import com.uca.auth.models.auth.RegisterRequest;
import com.uca.auth.services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @CrossOrigin(origins = "*")
    @PostMapping(value = "login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request){
        return ResponseEntity.ok(authService.login(request));

    }

    @CrossOrigin(origins = "*")
    @PostMapping(value = "register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request){
        return ResponseEntity.ok(authService.register(request));
    }
}
