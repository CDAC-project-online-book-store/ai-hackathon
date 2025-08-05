package com.library.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.library.dto.BookDTO;
import com.library.model.Book;
import com.library.service.BookService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/books")
@AllArgsConstructor
public class BookController {
	
	
	private final BookService bookService;
	
	@PostMapping
	public ResponseEntity<?> create(@RequestBody BookDTO dto) {
		Book saved = bookService.addBook(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(saved);
	}
	
	
}
