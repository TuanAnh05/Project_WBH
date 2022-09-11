package com.test.demo.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.test.demo.Models.User;
import com.test.demo.Responsitory.RepoUser;

@RestController
@RequestMapping("/api/auth")
public class userControllers {
    
    @Autowired
    public RepoUser repoUser;

    @PostMapping(value = "/login")
    public Boolean Login(@RequestParam(value = "username", defaultValue = "")String username,
        @RequestParam(value = "password", defaultValue = "") String password){


        if(username == ""|| password == ""){
            return false;
        }
        else{
            User us = repoUser.Login(username, password);
            System.out.println(us.getFullname());
            System.out.println(us.getUsername());
        }
        return true;
    }
}
