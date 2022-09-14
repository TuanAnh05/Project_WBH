package com.test.demo.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.demo.Models.User;
import com.test.demo.Responsitory.RepoUser;

@RestController
@RequestMapping("/api/demo")
public class Login {

    @Autowired
    public RepoUser repoUser;

    @PostMapping(value = "/register")
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
