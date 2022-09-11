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

import com.test.demo.Models.Phanquyen;
import com.test.demo.Responsitory.RepoPhanquyen;

@RestController
@RequestMapping("/api/PhanQuyen")
public class PhanQuyenController {
    @Autowired
    RepoPhanquyen PhanQuyenRepo;

    @GetMapping(value = "/allPhanQuyen")
    public ResponseEntity<?> getListProduc() {

        List listPhanQuyen = PhanQuyenRepo.findAll();
        if (listPhanQuyen.isEmpty() == false) {
            return ResponseEntity.ok(listPhanQuyen);
        } else {
            return ResponseEntity.ok(listPhanQuyen);
        }

    }

    @GetMapping(value = "/allPhanQuyenById/{id}")
    public ResponseEntity<?> getListProductWithId(@PathVariable Integer id) {

        List listPhanQuyen = PhanQuyenRepo.getPhanQuyenByIdDanhMuc(id);
        if (listPhanQuyen.isEmpty() == false) {
            return ResponseEntity.ok(listPhanQuyen);
        } else {
            return ResponseEntity.ok(listPhanQuyen);
        }

    }
    @PostMapping(value = "/addPhanQuyen")
    public List<Phanquyen> createNews(@RequestBody @Validated Phanquyen pq) {
        Phanquyen entity = new Phanquyen();
        entity.setTen(pq.getTen());
        entity.setMota(pq.getMota());


        PhanQuyenRepo.save(entity);
        List<Phanquyen> listItem = PhanQuyenRepo.findAll();
        return listItem;
    }
    @DeleteMapping(value = "/deletePhanQuyen/{id}")
    public Boolean deletePhanQUyen(@PathVariable Long id) {

        Optional<Phanquyen> result = PhanQuyenRepo.findById(id);

        Phanquyen PhanQuyenDelete = new Phanquyen();

        try {
            if (result.isEmpty() == false) {
                PhanQuyenDelete.setId(result.get().getId());
                PhanQuyenDelete.setTen(result.get().getTen());
                PhanQuyenDelete.setMota(result.get().getMota());
                
            }
            PhanQuyenRepo.delete(PhanQuyenDelete);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
