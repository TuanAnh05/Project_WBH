package com.test.demo.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.demo.Models.Giohang;
import com.test.demo.Responsitory.RepoGiohang;

@RestController
@RequestMapping("/api/giohang")
public class GioHangController {
    @Autowired
    RepoGiohang giohangRepo;

    @GetMapping(value = "/allGioHang")
    public ResponseEntity<?> getListProduc() {

        List listGioHang = giohangRepo.findAll();
        if (listGioHang.isEmpty() == false) {
            return ResponseEntity.ok(listGioHang);
        } else {
            return ResponseEntity.ok(listGioHang);
        }

    }

    @GetMapping(value = "/allGioHangById/{id}")
    public ResponseEntity<?> getListGioHangWithId(@PathVariable Integer id) {

        List listGioHang = giohangRepo.getGioHangByIdDanhMuc(id);
        if (listGioHang.isEmpty() == false) {
            return ResponseEntity.ok(listGioHang);
        } else {
            return ResponseEntity.ok(listGioHang);
        }

    }

    @PostMapping(value = "/addGioHang")
    public List<Giohang> createNews(@RequestBody @Validated Giohang gh) {
        Giohang entity = new Giohang();
        entity.setTinhTrang(gh.getTinhTrang());
       

        giohangRepo.save(entity);
        List<Giohang> listItem = giohangRepo.findAll();
        return listItem;
    }

    @DeleteMapping(value = "/deleteGioHang/{id}")
    public Boolean deleteNews(@PathVariable Long id) {

        Optional<Giohang> result = giohangRepo.findById(id);

        Giohang GioHangDelete = new Giohang();

        try {
            if (result.isEmpty() == false) {
                GioHangDelete.setId(result.get().getId());
                GioHangDelete.setTinhTrang(result.get().getTinhTrang());
            }
            giohangRepo.delete(GioHangDelete);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
