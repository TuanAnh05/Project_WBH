package com.test.demo.Responsitory;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.test.demo.Models.Nhanvien;

public interface RepoNhanvien extends JpaRepository<Nhanvien,Long>{
    @Query(value = "SELECT * FROM nhanvien where nhanvien.id like inidnhanvien", nativeQuery = true)
    List getNhanVienByIdDanhMuc(@Param("inidnhanvien") Integer inidnhanvien);
}
