package com.test.demo.Responsitory;
import org.springframework.data.jpa.repository.JpaRepository;

import com.test.demo.Models.Donhang;
public interface RepoDonhang extends JpaRepository<Donhang,Long>{
    
}
