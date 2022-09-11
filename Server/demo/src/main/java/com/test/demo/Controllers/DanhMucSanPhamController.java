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

import com.test.demo.Models.Danhmucsanpham;
import com.test.demo.Responsitory.RepoDanhmucsanpham;

@RestController
@RequestMapping("/api/danhmucsanpham")
public class DanhMucSanPhamController {
    @Autowired
    RepoDanhmucsanpham danhmucsanphamRepo;

    @GetMapping(value = "/allDanhMucSanPham")
    public ResponseEntity<?> getListDanhMucSanPham() {

        List listDanhmucsanpham = danhmucsanphamRepo.findAll();
        if (listDanhmucsanpham.isEmpty() == false) {
            return ResponseEntity.ok(listDanhmucsanpham);
        } else {
            return ResponseEntity.ok(listDanhmucsanpham);
        }

    }

    @GetMapping(value = "/allDanhMucSanPhamById/{id}")
    public ResponseEntity<?> getListDanhMucSanPhamWithId(@PathVariable Integer id) {

        List listDanhmucsanpham = danhmucsanphamRepo.getdanhmucsanphamByIdDanhMuc(id);
        if (listDanhmucsanpham.isEmpty() == false) {
            return ResponseEntity.ok(listDanhmucsanpham);
        } else {
            return ResponseEntity.ok(listDanhmucsanpham);
        }

    }

    @PostMapping(value = "/addDanhMucSanPham")
    public List<Danhmucsanpham> createNews(@RequestBody @Validated Danhmucsanpham sp) {
        Danhmucsanpham entity = new Danhmucsanpham();
        entity.setTendanhmuc(sp.getTendanhmuc());
        entity.setHinhanh(sp.getHinhanh());
        entity.setMota(sp.getMota());
        entity.setNgaytao(sp.getNgaytao());
        
        danhmucsanphamRepo.save(entity);
        List<Danhmucsanpham> listItem = danhmucsanphamRepo.findAll();
        return listItem;
    }

    @DeleteMapping(value = "/deleteDanhMucSanPham/{id}")
    public Boolean deleteNews(@PathVariable Long id) {

        Optional<Danhmucsanpham> result = danhmucsanphamRepo.findById(id);

        Danhmucsanpham DanhMucSanPhamDelete = new Danhmucsanpham();

        try {
            if (result.isEmpty() == false) {
                DanhMucSanPhamDelete.setId(result.get().getId());
                DanhMucSanPhamDelete.setTendanhmuc(result.get().getTendanhmuc());
                DanhMucSanPhamDelete.setHinhanh(result.get().getHinhanh());
                DanhMucSanPhamDelete.setMota(result.get().getMota());
                DanhMucSanPhamDelete.setNgaytao(result.get().getNgaytao());
            }
            danhmucsanphamRepo.delete(DanhMucSanPhamDelete);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
