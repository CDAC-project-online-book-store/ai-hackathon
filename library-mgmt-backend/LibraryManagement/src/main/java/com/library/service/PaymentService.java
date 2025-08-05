package com.library.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.library.dto.PaymentDTO;
import com.library.model.Member;
import com.library.model.Payment;
import com.library.repository.MemberRepository;
import com.library.repository.PaymentRepository;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepo;

    @Autowired
    private MemberRepository memberRepo;

    public PaymentDTO savePayment(PaymentDTO dto) {
        Member member = memberRepo.findById(dto.getMemberId())
            .orElseThrow(() -> new RuntimeException("Member not found"));

        Payment payment = new Payment();
        payment.setMember(member);
        payment.setAmount(dto.getAmount());
        payment.setFineIncluded(dto.isFineIncluded());
        payment.setRemarks(dto.getRemarks());
        payment.setPaymentDate(LocalDate.now());

        Payment saved = paymentRepo.save(payment);

        PaymentDTO response = new PaymentDTO();
        response.setMemberId(saved.getMember().getId());
        response.setAmount(saved.getAmount());
        response.setFineIncluded(saved.isFineIncluded());
        response.setRemarks(saved.getRemarks());

        return response;
    }
}

