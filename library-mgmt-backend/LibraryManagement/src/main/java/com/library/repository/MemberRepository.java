package com.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.library.model.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {

	
}
