package com.example.CaGong.common.error.errorAdvice;

import com.example.CaGong.common.error.InfoNotExistedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class UserErrorAdvice {

    @ExceptionHandler(InfoNotExistedException.class)
    @ResponseBody
    public String infoExisted() {

        return "1";
    }

}
