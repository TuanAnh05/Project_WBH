package com.test.demo.Models;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Danhmucsanpham")
public class Danhmucsanpham {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "tendanhmuc")
    private String tendanhmuc;

    @Column(name = "hinhanh")
    private String hinhanh;
    
    @Column(name = "mota")
    private String mota;
    
    @Column(name = "ngaytao")
    private Date ngaytao;

    public Danhmucsanpham(){
        super();
    }
    
    public Danhmucsanpham(String tendanhmuc, String hinhanh, String mota
    , Date ngaytao){
        this.tendanhmuc=tendanhmuc;
        this.hinhanh=hinhanh;
        this.mota=mota;
        this.ngaytao=ngaytao;
    }

    public String getTendanhmuc() {
        return tendanhmuc;
    }

    public void setTendanhmuc(String tendanhmuc) {
        this.tendanhmuc = tendanhmuc;
    }

    public String getHinhanh() {
        return hinhanh;
    }

    public void setHinhanh(String hinhanh) {
        this.hinhanh = hinhanh;
    }

    public String getMota() {
        return mota;
    }

    public void setMota(String mota) {
        this.mota = mota;
    }

    public Date getNgaytao() {
        return ngaytao;
    }

    public void setNgaytao(Date ngaytao) {
        this.ngaytao = ngaytao;
    }
    
}
