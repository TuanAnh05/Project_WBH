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

import com.test.demo.Models.Khachhang;
import com.test.demo.Responsitory.RepoKhachhang;

@RestController
@RequestMapping("/api/khachhang")
public class KhachhangController {
    @Autowired
    RepoKhachhang khachhangRepo;

    @GetMapping(value = "/allkhachhang")
    public ResponseEntity<?> getListProduc() {

        List listKhachHang = khachhangRepo.findAll();
        if (listKhachHang.isEmpty() == false) {
            return ResponseEntity.ok(listKhachHang);
        } else {
            return ResponseEntity.ok(listKhachHang);
        }

    }

    @GetMapping(value = "/allkhachhangById/{id}")
    public ResponseEntity<?> getListkhachhangWithId(@PathVariable Integer id) {

        List listKhachHang = khachhangRepo.getKhachHangByIdDanhMuc(id);
        if (listKhachHang.isEmpty() == false) {
            return ResponseEntity.ok(listKhachHang);
        } else {
            return ResponseEntity.ok(listKhachHang);
        }

    }

    @PostMapping(value = "/addkhachhang")
    public List<Khachhang> createNews(@RequestBody @Validated Khachhang kh) {
        Khachhang entity = new Khachhang();
        entity.setHoten(kh.getHoten());
        entity.setEmail(kh.getEmail());
        entity.setSdt(kh.getSdt());
        entity.setDiachi(kh.getDiachi());
        entity.setTaikhoan(kh.getTaikhoan());
        entity.setMatkhau(kh.getMatkhau());
        entity.setAnhdaidien(kh.getAnhdaidien());
        entity.setTrangthai(kh.getTrangthai());
        entity.setGioitinh(kh.getGioitinh());
        entity.setNgaysinh(kh.getNgaysinh());
        entity.setToken(kh.getToken());
        entity.setSodonhang(kh.getSodonhang());
        entity.setTongthanhtoan(kh.getTongthanhtoan());
        entity.setNgaytao(kh.getNgaytao());

        khachhangRepo.save(entity);
        List<Khachhang> listItemFood = khachhangRepo.findAll();
        return listItemFood;
    }

    @DeleteMapping(value = "/deletekhachhang/{id}")
    public Boolean deleteNews(@PathVariable Long id) {

        Optional<Khachhang> result = khachhangRepo.findById(id);

        Khachhang khachhangDelete = new Khachhang();

        try {
            if (result.isEmpty() == false) {
                khachhangDelete.setId(result.get().getId());
                khachhangDelete.setHoten(result.get().getHoten());
                khachhangDelete.setEmail(result.get().getEmail());
                khachhangDelete.setSdt(result.get().getSdt());
                khachhangDelete.setDiachi(result.get().getDiachi());
                khachhangDelete.setTaikhoan(result.get().getTaikhoan());
                khachhangDelete.setMatkhau(result.get().getMatkhau());
                khachhangDelete.setAnhdaidien(result.get().getAnhdaidien());
                khachhangDelete.setTrangthai(result.get().getTrangthai());
                khachhangDelete.setGioitinh(result.get().getGioitinh());
                khachhangDelete.setNgaysinh(result.get().getNgaysinh());
                khachhangDelete.setToken(result.get().getToken());
                khachhangDelete.setSodonhang(result.get().getSodonhang());
                khachhangDelete.setTongthanhtoan(result.get().getTongthanhtoan());
                khachhangDelete.setNgaytao(result.get().getNgaytao());
            }
            khachhangRepo.delete(khachhangDelete);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}
