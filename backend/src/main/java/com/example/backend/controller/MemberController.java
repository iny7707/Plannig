package com.example.backend.controller;

import com.example.backend.dto.MemberDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class MemberController {
    @PostMapping("/signup")
    public ResponseEntity<String> MemberData(@RequestBody MemberDTO memberDTO){
        System.out.println("회원가입 요청 = " + memberDTO);
        return ResponseEntity.ok("회원가입이 성공적으로 진행되었습니다");
    }
}
