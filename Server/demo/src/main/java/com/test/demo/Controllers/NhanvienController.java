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

import com.test.demo.Models.Nhanvien;
import com.test.demo.Responsitory.RepoNhanvien;

@RestController
@RequestMapping("/api/nhanvien")
public class NhanvienController {
    @Autowired
    RepoNhanvien nhanvienRepo;
    @GetMapping(value = "/allNhanvien")
    public ResponseEntity<?> getListProduc() {

        List listNhanvien = nhanvienRepo.findAll();
        if (listNhanvien.isEmpty() == false) {
            return ResponseEntity.ok(listNhanvien);
        } else {
            return ResponseEntity.ok(listNhanvien);
        }

    }
    
    @GetMapping(value = "/allNhanvienById/{id}")
    public ResponseEntity<?> getListProductWithId(@PathVariable Integer id) {

        List listNhanvien = nhanvienRepo.getNhanVienByIdDanhMuc(id);
        if (listNhanvien.isEmpty() == false) {
            return ResponseEntity.ok(listNhanvien);
        } else {
            return ResponseEntity.ok(listNhanvien);
        }
    }

    @PostMapping(value = "/addNhanvien")
    public List<Nhanvien> createNews(@RequestBody @Validated Nhanvien nv) {
        Nhanvien entity = new Nhanvien();
        entity.setHoten(nv.getHoten());
        entity.setEmail(nv.getEmail());
        entity.setSdt(nv.getSdt());
        entity.setDiachi(nv.getDiachi());
        entity.setTaikhoan(nv.getTaikhoan());
        entity.setMatkhau(nv.getMatkhau());
        entity.setTrangthai(nv.getTrangthai());
        entity.setGioitinh(nv.getGioitinh());
        entity.setNgaysinh(nv.getNgaysinh());
        entity.setToken(nv.getToken());
        entity.setNgaytao(nv.getNgaytao());

        nhanvienRepo.save(entity);
        List<Nhanvien> listItemFood = nhanvienRepo.findAll();
        return listItemFood;
    }
    @DeleteMapping(value = "/deleteNhanvien/{id}")
    public Boolean deleteNews(@PathVariable Long id) {

        Optional<Nhanvien> result = nhanvienRepo.findById(id);

        Nhanvien NhanvienDelete = new Nhanvien();

        try {
            if (result.isEmpty() == false) {
                NhanvienDelete.setId(result.get().getId());
                NhanvienDelete.setHoten(result.get().getHoten());
                NhanvienDelete.setEmail(result.get().getEmail());
                NhanvienDelete.setSdt(result.get().getSdt());
                NhanvienDelete.setDiachi(result.get().getDiachi());
                NhanvienDelete.setTaikhoan(result.get().getTaikhoan());
                NhanvienDelete.setMatkhau(result.get().getMatkhau());
                NhanvienDelete.setTrangthai(result.get().getTrangthai());
                NhanvienDelete.setGioitinh(result.get().getGioitinh());
                NhanvienDelete.setNgaysinh(result.get().getNgaysinh());
                NhanvienDelete.setToken(result.get().getToken());
                NhanvienDelete.setNgaytao(result.get().getNgaytao());
            }
            nhanvienRepo.delete(NhanvienDelete);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
