package com.library.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.library.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
	List<Payment> findByMemberId(Long memberId);
}
