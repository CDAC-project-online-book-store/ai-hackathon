package com.library.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class BookDTO {
    private String title;
    private String author;
    private int totalCopies;
	private String subject;
	private String isbn;
	private String rackNumber;
}
