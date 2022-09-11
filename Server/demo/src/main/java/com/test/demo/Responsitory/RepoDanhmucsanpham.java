package com.test.demo.Responsitory;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.test.demo.Models.Danhmucsanpham;

public interface RepoDanhmucsanpham extends JpaRepository<Danhmucsanpham,Long>{
    @Query(value = "SELECT * FROM danhmucsanpham where danhmucsanpham.id like iniddanhmucsanpham", nativeQuery = true)
    List getdanhmucsanphamByIdDanhMuc(@Param("iniddanhmucsanpham") Integer iniddanhmucsanpham);
}
