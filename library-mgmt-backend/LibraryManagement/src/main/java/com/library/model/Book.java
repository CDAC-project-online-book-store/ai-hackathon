package com.library.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String isbn; // International Standard Book Number
	private String title;
	private String author;
	private String subject;
	private Double price;
	private String description;
	
	
	@OneToMany(mappedBy = "book", cascade = CascadeType.ALL)
	private List<BookCopy> copies = new ArrayList<>(); // List of copies of the book;
}
