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

import com.test.demo.Models.Chitietgiohang;
import com.test.demo.Responsitory.RepoChitietgiohang;

@RestController
@RequestMapping("/api/chitietgiohang")
public class ChiTietGioHangController {
    @Autowired
    RepoChitietgiohang chitietgiohangRepo;

    @GetMapping(value = "/allChitietgiohang")
    public ResponseEntity<?> getListChiTietGioHang() {

        List listChiTietGioHang = chitietgiohangRepo.findAll();
        if (listChiTietGioHang.isEmpty() == false) {
            return ResponseEntity.ok(listChiTietGioHang);
        } else {
            return ResponseEntity.ok(listChiTietGioHang);
        }

    }

    @GetMapping(value = "/allChitietgiohangById/{id}")
    public ResponseEntity<?> getListChitietgiohangWithId(@PathVariable Integer id) {

        List listChiTietGioHang = chitietgiohangRepo.getchitietgiohangByIdDanhMuc(id);
        if (listChiTietGioHang.isEmpty() == false) {
            return ResponseEntity.ok(listChiTietGioHang);
        } else {
            return ResponseEntity.ok(listChiTietGioHang);
        }

    }

    @PostMapping(value = "/addChitietgiohang")
    public List<Chitietgiohang> createNews(@RequestBody @Validated Chitietgiohang sp) {
        Chitietgiohang entity = new Chitietgiohang();
        entity.setDongia(sp.getDongia());
        entity.setNum(sp.getNum());
        entity.setTongthanhtoan(sp.getTongthanhtoan());
        entity.setNgaytao(sp.getNgaytao());
        
        chitietgiohangRepo.save(entity);
        List<Chitietgiohang> listItem = chitietgiohangRepo.findAll();
        return listItem;
    }

    @DeleteMapping(value = "/deleteChitietgiohang/{id}")
    public Boolean deleteNews(@PathVariable Long id) {

        Optional<Chitietgiohang> result = chitietgiohangRepo.findById(id);

        Chitietgiohang ChitietgiohangDelete = new Chitietgiohang();

        try {
            if (result.isEmpty() == false) {
                ChitietgiohangDelete.setId(result.get().getId());
                ChitietgiohangDelete.setDongia(result.get().getDongia());
                ChitietgiohangDelete.setNum(result.get().getNum());
                ChitietgiohangDelete.setTongthanhtoan(result.get().getTongthanhtoan());
                ChitietgiohangDelete.setNgaytao(result.get().getNgaytao());

            }
            chitietgiohangRepo.delete(ChitietgiohangDelete);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
