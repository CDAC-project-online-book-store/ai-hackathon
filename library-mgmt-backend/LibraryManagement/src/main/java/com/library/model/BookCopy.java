package com.library.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookCopy {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String copyCode;
	private boolean issued = false; // e.g., AVAILABLE, CHECKED_OUT, RESERVED
	
	private String rackNumber;
	
	@ManyToOne
	@JoinColumn(name = "book_id")
	private Book book;

	// Additional fields can be added as needed
	// For example, you might want to track the due date for checked-out copies
	// private LocalDate dueDate;
}
