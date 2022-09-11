package com.test.demo.Models;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Nhanvien")
public class Nhanvien {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "hoten")
    private String hoten;

    @Column(name = "email")
    private String email;
    
    @Column(name = "sdt")
    private String sdt;
    
    @Column(name = "diachi")
    private String diachi;
    
    @Column(name = "taikhoan")
    private String taikhoan;
    
    @Column(name = "matkhau")
    private String matkhau;
    
    @Column(name = "trangthai")
    private boolean trangthai;
    
    @Column(name = "gioitinh")
    private String gioitinh;
    
    @Column(name = "ngaysinh")
    private Date ngaysinh;
    
    @Column(name = "Token")
    private String Token;
    
    @Column(name = "ngaytao")
    private Date ngaytao;

    public Nhanvien(){
        super();
    }
    public Nhanvien(String hoten, String email, String sdt, String diachi, String taikhoan, String matkhau, boolean trangthai, String gioitinh, Date ngaysinh, String Token, Date ngaytao){
        this.hoten=hoten;
        this.email=email;
        this.sdt=sdt;
        this.diachi=diachi;
        this.taikhoan=taikhoan;
        this.matkhau=matkhau;
        this.trangthai=trangthai;
        this.gioitinh=gioitinh;
        this.ngaysinh=ngaysinh;
        this.Token=Token;
        this.ngaytao=ngaytao;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getHoten() {
        return hoten;
    }
    public void setHoten(String hoten) {
        this.hoten = hoten;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getSdt() {
        return sdt;
    }
    public void setSdt(String sdt) {
        this.sdt = sdt;
    }
    public String getDiachi() {
        return diachi;
    }
    public void setDiachi(String diachi) {
        this.diachi = diachi;
    }
    public String getTaikhoan() {
        return taikhoan;
    }
    public void setTaikhoan(String taikhoan) {
        this.taikhoan = taikhoan;
    }
    public String getMatkhau() {
        return matkhau;
    }
    public void setMatkhau(String matkhau) {
        this.matkhau = matkhau;
    }
    public boolean getTrangthai() {
        return trangthai;
    }
    public void setTrangthai(boolean trangthai) {
        this.trangthai = trangthai;
    }
    public String getGioitinh() {
        return gioitinh;
    }
    public void setGioitinh(String gioitinh) {
        this.gioitinh = gioitinh;
    }
    public Date getNgaysinh() {
        return ngaysinh;
    }
    public void setNgaysinh(Date ngaysinh) {
        this.ngaysinh = ngaysinh;
    }
    public String getToken() {
        return Token;
    }
    public void setToken(String token) {
        Token = token;
    }
    public Date getNgaytao() {
        return ngaytao;
    }
    public void setNgaytao(Date ngaytao) {
        this.ngaytao = ngaytao;
    }
    
}

