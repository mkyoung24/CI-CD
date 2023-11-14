package com.example.CaGong.member.service;

import com.example.CaGong.member.dto.MemberDTO;
import com.example.CaGong.member.entity.Member;

public interface MemberService {

    default Member dtoToEntity(MemberDTO dto) {
        Member entity = Member.builder()
                .memId(dto.getMemId())
                .memEmail(dto.getMemEmail())
                .memPw(dto.getMemPw())
                .memName(dto.getMemName())
                .memAddress(dto.getMemAddress())
                .memPhone(dto.getMemPhone())
                .memRole(dto.getMemRole())
                .build();
        return entity;
    }

    default MemberDTO entityToDto(Member entity) {
        MemberDTO dto = MemberDTO.builder()
                .memId(entity.getMemId())
                .memEmail(entity.getMemEmail())
                .memPw(entity.getMemPw())
                .memName(entity.getMemName())
                .memPhone(entity.getMemPhone())
                .memAddress(entity.getMemAddress())
                .memRole(entity.getMemRole())
                .build();
        return dto;
    }
}
