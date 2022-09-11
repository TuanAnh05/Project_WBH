package com.test.demo.Responsitory;
import org.springframework.data.jpa.repository.JpaRepository;

import com.test.demo.Models.Sanpham;
public interface RepoSanpham extends JpaRepository<Sanpham,Long>{
    @Query(value = "select * from sanpham join danhmucsanpham on sanpham.iddanhmuc=danhmucsanpham.id where danhmucsanpham.id=:iniddanhmuc",nativeQuery = true)
    List getSanPhamByIdDanhMuc(@Param("iniddanhmuc") Integer iniddanhmuc);
}
