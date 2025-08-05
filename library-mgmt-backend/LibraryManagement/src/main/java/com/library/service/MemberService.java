package com.library.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.library.dto.MemberDTO;
import com.library.model.Member;
import com.library.repository.MemberRepository;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class MemberService {

	@Autowired
	private final MemberRepository memberRepo;
	
	public Member addMember(MemberDTO dto) {
		Member member = new Member();
		member.setName(dto.getName());
		member.setEmail(dto.getEmail());
		member.setPhoneNumber(dto.getPhoneNumber());
		 
		
		return memberRepo.save(member);
	}
}
