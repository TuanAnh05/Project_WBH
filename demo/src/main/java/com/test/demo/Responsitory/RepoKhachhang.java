package com.test.demo.Responsitory;
import org.springframework.data.jpa.repository.JpaRepository;

import com.test.demo.Models.Khachhang;
public interface RepoKhachhang extends JpaRepository<Khachhang,Long>{
    
}
