package com.test.demo.Responsitory;
import org.springframework.data.jpa.repository.JpaRepository;

import com.test.demo.Models.Phanquyen;
public interface RepoPhanquyen extends JpaRepository<Phanquyen,Long>{
    
}
