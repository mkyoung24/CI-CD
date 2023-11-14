package com.example.CaGong.member.repository;

import com.example.CaGong.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByMemEmailAndAndMemPw(String memEmail, String memPw);

}
