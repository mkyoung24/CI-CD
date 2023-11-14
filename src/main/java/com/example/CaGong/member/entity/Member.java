package com.example.CaGong.member.entity;

import jakarta.persistence.*;
import lombok.*;
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mem_id")
    private Long memId;

    @Column(name = "mem_email" ,unique = true)
    private String memEmail;

    @Column(name = "mem_pw")
    private String memPw;

    @Column(name = "mem_name")
    private String memName;

    @Column(name = "mem_phone")
    private String memPhone;

    @Column(name = "mem_address")
    private String memAddress;

    @Column(name = "mem_role")
    private String memRole;
}
