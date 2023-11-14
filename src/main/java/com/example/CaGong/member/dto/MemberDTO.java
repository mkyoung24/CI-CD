package com.example.CaGong.member.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class MemberDTO {

    private Long memId;

    private String memEmail;

    private String memPw;

    private String memName;

    private String memPhone;

    private String memAddress;

    private String memRole;
}
