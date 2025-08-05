package com.library.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.library.dto.MemberDTO;
import com.library.model.Member;
import com.library.service.MemberService;

@RestController
@RequestMapping("/api/members")
public class MemberController {
	@Autowired
	private MemberService memberService;
	
	@PostMapping
	public ResponseEntity<?> creat(@RequestBody MemberDTO dto) {
		Member saved = memberService.addMember(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(saved);
	}
}
