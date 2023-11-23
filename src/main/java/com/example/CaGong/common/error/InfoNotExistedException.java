package com.example.CaGong.common.error;

public class InfoNotExistedException extends RuntimeException{
    public InfoNotExistedException() {
        super("로그인 한 아이디로 회원정보를 찾을 수 없습니다.");
    }
}
