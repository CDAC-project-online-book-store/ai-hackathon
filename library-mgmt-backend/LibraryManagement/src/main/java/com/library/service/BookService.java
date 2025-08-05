package com.library.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.library.dto.BookDTO;
import com.library.model.Book;
import com.library.model.BookCopy;
import com.library.repository.BookRepository;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class BookService {
	
	public final BookRepository bookRepo;
	
	public Book addBook(BookDTO dto) {
		Book book = new Book();
		book.setTitle(dto.getTitle());
		book.setAuthor(dto.getAuthor());
		book.setIsbn(dto.getIsbn());
		
		for (int i = 0; i < dto.getTotalCopies(); i++) {
			BookCopy copy = new BookCopy();
			book.getCopies().add(copy);
		}
		
		return bookRepo.save(book);
			
	}
}
