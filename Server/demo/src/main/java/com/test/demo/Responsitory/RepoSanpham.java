package com.test.demo.Responsitory;
import org.springframework.data.jpa.repository.JpaRepository;

import com.test.demo.Models.Sanpham;
public interface RepoSanpham extends JpaRepository<Sanpham,Long>{
    
}
