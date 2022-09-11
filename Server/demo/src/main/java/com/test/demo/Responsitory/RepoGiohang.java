package com.test.demo.Responsitory;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.test.demo.Models.Giohang;
public interface RepoGiohang extends JpaRepository<Giohang,Long>{
    @Query(value = "SELECT * FROM giohang where giohang.id like inidgiohang", nativeQuery = true)
    List getGioHangByIdDanhMuc(@Param("inidgiohang") Integer inidgiohang);
}
