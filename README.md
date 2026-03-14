# CRUD Data KTP - Spring Boot

## Deskripsi
Project ini merupakan aplikasi backend sederhana untuk mengelola data KTP menggunakan Spring Boot dan MySQL.  
Aplikasi ini menyediakan REST API untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada data KTP.

## Teknologi yang Digunakan
- Java
- Spring Boot
- Spring Data JPA
- MySQL
- Lombok
- Maven
- HTML, CSS, JavaScript (Frontend)

## Struktur Data KTP

| Field | Tipe Data | Keterangan |
|------|-----------|-----------|
| id | Integer | Primary Key |
| nomorKtp | String | Nomor KTP (16 digit) |
| namaLengkap | String | Nama lengkap |
| alamat | String | Alamat |
| tanggalLahir | Date | Tanggal lahir |
| jenisKelamin | String | Laki-laki / Perempuan |

## Validasi Data
- Nomor KTP harus **16 digit**
- Nomor KTP hanya boleh **angka**
- Nama lengkap tidak boleh kosong
- Alamat tidak boleh kosong
- Jenis kelamin harus dipilih

## Endpoint API

### 1. Get Semua Data KTP
