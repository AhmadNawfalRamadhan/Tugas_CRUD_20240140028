package com.deploy.Praktikum2.service;

import com.deploy.Praktikum2.model.dto.KtpAddRequest;
import com.deploy.Praktikum2.model.dto.KtpDto;

import java.util.List;

public interface KtpService {
    KtpDto AddKtp(KtpAddRequest request);
    List<KtpDto> getAllKtp();
    KtpDto getKtpByID(Integer id);
    KtpDto UpdateKtp(Integer id, KtpAddRequest request);
    void DeleteKtp(Integer id);
}
