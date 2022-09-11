package com.test.demo.Responsitory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.test.demo.Models.Chitietgiohang;
public interface RepoChitietgiohang extends JpaRepository<Chitietgiohang,Long>{
    @Query(value = "SELECT * FROM chitietgiohang where chitietgiohang.id like inidchitietgiohang", nativeQuery = true)
    List getchitietgiohangByIdDanhMuc(@Param("inidchitietgiohang") Integer inidchitietgiohang);
}
