package com.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.library.model.BookCopy;

public interface BookCopyRepository extends JpaRepository<BookCopy, Long> {

}
