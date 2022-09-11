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

import com.test.demo.Models.Donhang;
import com.test.demo.Responsitory.RepoDonhang;

@RestController
@RequestMapping("/api/donhang")
public class DonHangController {
    @Autowired
    RepoDonhang donhangRepo;

    @GetMapping(value = "/allDonhang")
    public ResponseEntity<?> getListProduc() {

        List listDonhang = donhangRepo.findAll();
        if (listDonhang.isEmpty() == false) {
            return ResponseEntity.ok(listDonhang);
        } else {
            return ResponseEntity.ok(listDonhang);
        }

    }

    @GetMapping(value = "/allDonhangById/{id}")
    public ResponseEntity<?> getListDonhangWithId(@PathVariable Integer id) {

        List listDonhang = donhangRepo.getdonhangByIdDanhMuc(id);
        if (listDonhang.isEmpty() == false) {
            return ResponseEntity.ok(listDonhang);
        } else {
            return ResponseEntity.ok(listDonhang);
        }

    }

    @PostMapping(value = "/addDonhang")
    public List<Donhang> createNews(@RequestBody @Validated Donhang dh) {
        Donhang entity = new Donhang();
        entity.setNgayDat(dh.getNgayDat());
        entity.setTongTien(dh.getTongTien());
        entity.setTienGiam(dh.getTienGiam());
        entity.setTinhTrang(dh.getTinhTrang());
        

        donhangRepo.save(entity);
        List<Donhang> listItem = donhangRepo.findAll();
        return listItem;
    }

    @DeleteMapping(value = "/deleteDonhang/{id}")
    public Boolean deleteNews(@PathVariable Long id) {

        Optional<Donhang> result = donhangRepo.findById(id);

        Donhang DonhangDelete = new Donhang();

        try {
            if (result.isEmpty() == false) {
                DonhangDelete.setId(result.get().getId());
                DonhangDelete.setNgayDat(result.get().getNgayDat());
                DonhangDelete.setTongTien(result.get().getTienGiam());
                DonhangDelete.setTienGiam(result.get().getTienGiam());
                DonhangDelete.setTinhTrang(result.get().getTinhTrang());
            }
            donhangRepo.delete(DonhangDelete);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}
