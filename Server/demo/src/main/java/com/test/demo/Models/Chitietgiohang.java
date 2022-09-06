package com.test.demo.Models;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="Chitietgiohang")

public class Chitietgiohang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "dongia")
    private double dongia;

    @Column(name = "num")
    private int num;

    @Column(name = "tongthanhtoan")
    private double tongthanhtoan;

    @Column(name = "ngaytao")
    private Date ngaytao;

    public Chitietgiohang(){
        super();
    }
    public Chitietgiohang(double dongia, int num, double tongthanhtoan,Date ngaytao){
        this.dongia=dongia;
        this.num=num;
        this.tongthanhtoan=tongthanhtoan;
        this.ngaytao=ngaytao;
    }
    public double getDongia() {
        return dongia;
    }
    public void setDongia(double dongia) {
        this.dongia = dongia;
    }
    public int getNum() {
        return num;
    }
    public void setNum(int num) {
        this.num = num;
    }
    public double getTongthanhtoan() {
        return tongthanhtoan;
    }
    public void setTongthanhtoan(double tongthanhtoan) {
        this.tongthanhtoan = tongthanhtoan;
    }
    public Date getNgaytao() {
        return ngaytao;
    }
    public void setNgaytao(Date ngaytao) {
        this.ngaytao = ngaytao;
    }
    
}
