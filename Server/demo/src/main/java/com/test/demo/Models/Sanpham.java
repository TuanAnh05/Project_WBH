package com.test.demo.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Sanpham")
public class Sanpham {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tenSp")
    private String tenSp;
    
    @Column(name = "MoTa")
    private String MoTa;
    
    @Column(name = "ThoiGianBaoHanh")
    private int ThoiGianBaoHanh;
    
    @Column(name = "SoLuong")
    private int SoLuong;
    
    @Column(name = "GiaGoc")
    private double GiaGoc;
    
    @Column(name = "GiaKM")
    private double GiaKM;
    
    @Column(name = "tinhTrang")
    private boolean tinhTrang;
    
    @Column(name = "AnhMinhHoa")
    private String AnhMinhHoa;
    
    public Sanpham(){
        super();
    }
    public Sanpham(String tenSp, String MoTa, int ThoiGianBaoHanh, int SoLuong, double GiaGoc, double GiaKM, boolean tinhTrang, String AnhMinhHoa){
        this.tenSp=tenSp;
        this.MoTa=MoTa;
        this.ThoiGianBaoHanh=ThoiGianBaoHanh;
        this.SoLuong=SoLuong;
        this.GiaGoc=GiaGoc;
        this.GiaKM=GiaKM;
        this.tinhTrang=tinhTrang;
        this.AnhMinhHoa=AnhMinhHoa;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTenSp() {
        return tenSp;
    }
    public void setTenSp(String tenSp) {
        this.tenSp = tenSp;
    }
    public String getMoTa() {
        return MoTa;
    }
    public void setMoTa(String moTa) {
        MoTa = moTa;
    }
    public int getThoiGianBaoHanh() {
        return ThoiGianBaoHanh;
    }
    public void setThoiGianBaoHanh(int thoiGianBaoHanh) {
        ThoiGianBaoHanh = thoiGianBaoHanh;
    }
    public int getSoLuong() {
        return SoLuong;
    }
    public void setSoLuong(int soLuong) {
        SoLuong = soLuong;
    }
    public double getGiaGoc() {
        return GiaGoc;
    }
    public void setGiaGoc(double giaGoc) {
        GiaGoc = giaGoc;
    }
    public double getGiaKM() {
        return GiaKM;
    }
    public void setGiaKM(double giaKM) {
        GiaKM = giaKM;
    }
    public boolean getTinhTrang() {
        return tinhTrang;
    }
    public void setTinhTrang(boolean tinhTrang) {
        this.tinhTrang = tinhTrang;
    }
    public String getAnhMinhHoa() {
        return AnhMinhHoa;
    }
    public void setAnhMinhHoa(String anhMinhHoa) {
        AnhMinhHoa = anhMinhHoa;
    }
    
}
