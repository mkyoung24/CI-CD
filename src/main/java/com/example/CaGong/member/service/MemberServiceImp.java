package com.example.CaGong.member.service;

import com.example.CaGong.common.error.InfoNotExistedException;
import com.example.CaGong.member.dto.MemberDTO;
import com.example.CaGong.member.entity.Member;
import com.example.CaGong.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Log4j2
public class MemberServiceImp implements MemberService{

    private final MemberRepository memberRepository;

    public void signup(MemberDTO dto) {

        memberRepository.save(dtoToEntity(dto));
    }

    public MemberDTO login(MemberDTO dto) {
        Member member = memberRepository.findByMemEmailAndAndMemPw(dto.getMemEmail(), dto.getMemPw()).orElseThrow(() -> new InfoNotExistedException());

        return entityToDto(member);
    }

}
