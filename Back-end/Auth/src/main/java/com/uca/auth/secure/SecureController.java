package com.uca.auth.secure;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class SecureController {

    @PostMapping(value ="home")
    public String welcome(){
        return "Welcome to secure endpoint";
    }
}
    