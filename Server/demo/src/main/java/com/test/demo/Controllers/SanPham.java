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

import com.test.demo.Models.Sanpham;
import com.test.demo.Responsitory.RepoSanpham;

@RestController
@RequestMapping("/api/demo")
public class SanPham {

    @Autowired
    RepoSanpham sanphamRepo;

    @GetMapping(value = "/allProduct")
    public ResponseEntity<?> getListProduc() {

        List listSanPham = sanphamRepo.findAll();
        if (listSanPham.isEmpty() == false) {
            return ResponseEntity.ok(listSanPham);
        } else {
            return ResponseEntity.ok(listSanPham);
        }

    }

    @GetMapping(value = "/allProductById/{id}")
    public ResponseEntity<?> getListProductWithId(@PathVariable Integer id) {

        List listSanPham = sanphamRepo.getSanPhamByIdDanhMuc(id);
        if (listSanPham.isEmpty() == false) {
            return ResponseEntity.ok(listSanPham);
        } else {
            return ResponseEntity.ok(listSanPham);
        }
    }

    @PostMapping(value = "/addProduct")
    public List<Sanpham> createNews(@RequestBody @Validated Sanpham sp) {
        Sanpham entity = new Sanpham();
        entity.setAnhMinhHoa(sp.getAnhMinhHoa());
        entity.setGiaGoc(sp.getGiaGoc());
        entity.setGiaKM(sp.getGiaKM());
        entity.setMoTa(sp.getMoTa());
        entity.setSoLuong(sp.getSoLuong());
        entity.setTenSp(sp.getTenSp());
        entity.setThoiGianBaoHanh(sp.getThoiGianBaoHanh());
        entity.setTinhTrang(sp.getTinhTrang());

        sanphamRepo.save(entity);
        List<Sanpham> listItemFood = sanphamRepo.findAll();
        return listItemFood;
    }

    @DeleteMapping(value = "/deleteProduct/{id}")
    public Boolean deleteNews(@PathVariable Long id) {

        Optional<Sanpham> result = sanphamRepo.findById(id);

        Sanpham productDelete = new Sanpham();

        try {
            if (result.isEmpty() == false) {
                productDelete.setId(result.get().getId());
                productDelete.setAnhMinhHoa(result.get().getAnhMinhHoa());
                productDelete.setGiaGoc(result.get().getGiaGoc());
                productDelete.setGiaKM(result.get().getGiaKM());
                productDelete.setMoTa(result.get().getMoTa());
                productDelete.setSoLuong(result.get().getSoLuong());
                productDelete.setTenSp(result.get().getTenSp());
                productDelete.setThoiGianBaoHanh(result.get().getThoiGianBaoHanh());
            }
            sanphamRepo.delete(productDelete);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
