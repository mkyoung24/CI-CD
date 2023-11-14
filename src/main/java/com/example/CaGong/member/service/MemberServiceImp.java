package com.example.CaGong.member.service;

import com.example.CaGong.member.dto.MemberDTO;
import com.example.CaGong.member.entity.Member;
import com.example.CaGong.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberServiceImp implements MemberService{

    private final MemberRepository memberRepository;

    public void signup(MemberDTO dto) {

        memberRepository.save(dtoToEntity(dto));
    }

    public MemberDTO login(MemberDTO dto) {
        Optional<Member> dbInfo = memberRepository.findByMemEmailAndAndMemPw(dto.getMemEmail(), dto.getMemPw());

        return dbInfo.isPresent() ? entityToDto(dbInfo.get()) : null;
    }

}
