package com.test.demo.Responsitory;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.test.demo.Models.Phanquyen;
public interface RepoPhanquyen extends JpaRepository<Phanquyen,Long>{
    @Query(value = "SELECT * FROM phanquyen where phanquyen.id like inidphanquyen", nativeQuery = true)
    List getPhanQuyenByIdDanhMuc(@Param("inidphanquyen") Integer inidphanquyen);
}
