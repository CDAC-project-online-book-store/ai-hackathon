package com.library.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberDTO {
	private String name;
	private String email;
	private String phoneNumber;
	private boolean isPaid;
}
