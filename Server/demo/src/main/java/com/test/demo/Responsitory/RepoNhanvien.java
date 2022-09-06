package com.test.demo.Responsitory;
import org.springframework.data.jpa.repository.JpaRepository;

import com.test.demo.Models.Nhanvien;

public interface RepoNhanvien extends JpaRepository<Nhanvien,Long>{
    
}
