package com.example.CaGong.member.controller;

import com.example.CaGong.member.dto.MemberDTO;
import com.example.CaGong.member.service.MemberServiceImp;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Log4j2
public class MemberController {

    private final MemberServiceImp memberService;

    @PostMapping("/user")       //회원가입
    public ResponseEntity<String> signup(@RequestBody MemberDTO dto) {
        memberService.signup(dto);

        return new ResponseEntity<>("회원가입 성공", HttpStatus.OK);
    }

    @PostMapping("/login")       //로그인
    public String login(@RequestBody MemberDTO dto, HttpServletRequest request) {
        HttpSession session = request.getSession();
        MemberDTO memberDTO = memberService.login(dto);

        session.setAttribute("loginState", "login");
        session.setAttribute("id", memberDTO.getMemId());
        session.setAttribute("name", memberDTO.getMemName());
        session.setAttribute("role", memberDTO.getMemRole());
        session.setMaxInactiveInterval(60 * 60);

        return "0";
    }

    @PostMapping ("/logout")     //로그아웃
    public ResponseEntity<String> logout(HttpServletRequest request) {
        HttpSession session = request.getSession();

        session.setAttribute("loginState", "logout");
        session.setAttribute("id", null);
        session.setAttribute("name", null);
        session.setAttribute("role", null);
        session.setMaxInactiveInterval(0);

        return new ResponseEntity<>("로그아웃 성공", HttpStatus.OK);
    }
}
