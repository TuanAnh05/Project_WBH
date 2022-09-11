package com.test.demo.Responsitory;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.test.demo.Models.Sanpham;
public interface RepoSanpham extends JpaRepository<Sanpham,Long>{
    @Query(value = "select * from sanpham join danhmucsanpham on sanpham.iddanhmuc=danhmucsanpham.id where danhmucsanpham.id=:iniddanhmuc",nativeQuery = true)
    List getSanPhamByIdDanhMuc(@Param("iniddanhmuc") Integer iniddanhmuc);
    
}
