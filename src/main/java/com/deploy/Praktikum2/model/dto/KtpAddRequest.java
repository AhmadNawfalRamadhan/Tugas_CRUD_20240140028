package com.deploy.Praktikum2.model.dto;

import lombok.Data;
import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.NotNull;

@Data
public class KtpAddRequest {

    private Integer id;

    @NotBlank(message = "Nomor KTP tidak boleh kosong")
    @Pattern(regexp = "\\d+", message = "Nomor KTP hanya boleh angka")
    @Size(min = 16, max = 16, message = "Nomor KTP harus 16 digit")
    private String nomorKtp;

    @NotBlank(message = "Nama lengkap tidak boleh kosong")
    private String namaLengkap;

    @NotBlank(message = "Alamat tidak boleh kosong")
    private String alamat;

    @NotNull(message = "Tanggal lahir tidak boleh kosong")
    private LocalDate tanggalLahir;

    @NotBlank(message = "Jenis kelamin harus dipilih")
    private String jenisKelamin;
}