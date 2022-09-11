package com.test.demo.Models;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="Giohang")
public class Giohang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tinhTrang")
    private boolean tinhTrang;

    public Giohang(){
        super();
    }
    public Giohang(boolean tinhTrang){
        this.tinhTrang=tinhTrang;
    }
    public boolean getTinhTrang() {
        return tinhTrang;
    }
    public void setTinhTrang(boolean tinhTrang) {
        this.tinhTrang = tinhTrang;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    
}
