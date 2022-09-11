package com.test.demo.Models;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Donhang")
public class Donhang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NgayDat")
    private Date NgayDat;

    @Column(name = "TongTien")
    private double TongTien;
    
    @Column(name = "TienGiam")
    private double TienGiam;
    
    @Column(name = "TinhTrang")
    private String TinhTrang;
    
    public Donhang(){
        super();
    }
    public Donhang(Date NgayDat, double TongTien, double TienGiam, String TinhTrang){
        this.NgayDat=NgayDat;
        this.TongTien=TongTien;
        this.TienGiam=TienGiam;
        this.TinhTrang=TinhTrang;
    }
    public Date getNgayDat() {
        return NgayDat;
    }
    public void setNgayDat(Date ngayDat) {
        NgayDat = ngayDat;
    }
    public double getTongTien() {
        return TongTien;
    }
    public void setTongTien(double tongTien) {
        TongTien = tongTien;
    }
    public double getTienGiam() {
        return TienGiam;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public void setTienGiam(double tienGiam) {
        TienGiam = tienGiam;
    }
    public String getTinhTrang() {
        return TinhTrang;
    }
    public void setTinhTrang(String tinhTrang) {
        TinhTrang = tinhTrang;
    }
    
}
