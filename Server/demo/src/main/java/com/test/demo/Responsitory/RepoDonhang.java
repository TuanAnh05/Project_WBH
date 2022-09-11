package com.test.demo.Responsitory;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.test.demo.Models.Donhang;
public interface RepoDonhang extends JpaRepository<Donhang,Long>{
    @Query(value = "SELECT * FROM donhang where donhang.id like iniddonhang", nativeQuery = true)
    List getdonhangByIdDanhMuc(@Param("iniddonhang") Integer inidgiohang);
}

