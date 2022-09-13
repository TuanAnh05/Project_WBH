package com.test.demo.Controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.demo.Models.Sanpham;
import com.test.demo.Models.User;
import com.test.demo.Responsitory.RepoSanpham;
import com.test.demo.Responsitory.RepoUser;

@RestController
@RequestMapping("/api/demo")
public class Login {

    @Autowired
    public RepoSanpham repoSP;

    @GetMapping(value = "/allProduct")
    public boolean getSanPham() {

        Optional<Sanpham> listSP = repoSP.findAll();

        return listSP;
    }

    @PostMapping(value = "/addUser")
    public List<User> postMethodName(@RequestBody User user) {
        if (!user.getFullname().isEmpty() && !user.getUsername().isEmpty() && !user.getPassword().isEmpty()) {
            User userNew = new User();
            userNew.setFullname(user.getFullname());
            userNew.setUsername(user.getUsername());
            userNew.setPassword(user.getPassword());
            repoUser.save(userNew);
        }
        List<User> listUserNews = repoUser.findAll();
        return listUserNews;
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<String> postMethodName(@PathVariable Long id) {
        Optional<User> us = repoUser.findById(id);

        if (us.isEmpty() == true) {
            return ResponseEntity.ok("delete false");
        }
        repoUser.deleteById(id);
        return ResponseEntity.ok(" Delete success");
    }
}
