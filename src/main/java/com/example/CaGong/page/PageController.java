package com.example.CaGong.page;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/cagong")
@Log4j2
public class PageController {

    @GetMapping("/login")
    public String login() {
        return "user/login";
    }

    @GetMapping("/regist")
    public String regist() {

        return "user/regist";
    }

    @GetMapping("")
    public String main() {

        return "common/header";
    }
    
    //ci 테스트
}
