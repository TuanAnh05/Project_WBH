package com.test.demo.Responsitory;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.test.demo.Models.Khachhang;
public interface RepoKhachhang extends JpaRepository<Khachhang,Long>{
    @Query(value = "SELECT * FROM khachang where khachang.id like inidkhachang", nativeQuery = true)
    List getKhachHangByIdDanhMuc(@Param("inidkhachang") Integer inidkhachang);
}
