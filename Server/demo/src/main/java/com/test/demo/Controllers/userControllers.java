package com.test.demo.Controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.test.demo.Models.User;
import com.test.demo.Payload.resLogin;
import com.test.demo.Responsitory.RepoUser;


@RestController
@RequestMapping("/api/auth")
public class userControllers {
    
    @Autowired
    public RepoUser repoUser;

    
    // public Boolean Login(@RequestParam(value = "username", defaultValue = "")String username,
    //     @RequestParam(value = "password", defaultValue = "") String password){


    //     if(username == ""|| password == ""){
    //         return false;
    //     }
    //     else{
    //         User us = repoUser.Login(username, password);
    //         if(us.getUsername().toString()!=""|| us.getFullname().toString()!=""){
    //             return true;
    //         }
    //         else{
    //             return false;
    //         }
    //     }

    // }
    @PostMapping(value = "/login")
    public ResponseEntity<?> LoginController(@RequestParam(value = "username",defaultValue = "")String username,
    @RequestParam(value = "password", defaultValue = "") String password){
        if( username.equals("") || password.equals("")){
            return ResponseEntity.ok(new resLogin ("Nhập đầy đủ tài khoản và mật khẩu",false));
        }else{
            try{
                List<User> us = repoUser.Login(username, password);
                if(us.size()==1){
                    return ResponseEntity.ok(new resLogin("Thành công",true));
                }else{
                    return ResponseEntity.ok(new resLogin("Tài khoản mật khẩu không chính xác", false));
                }
            }catch(Exception e){
                return ResponseEntity.ok(new resLogin("Tài khoản mật khẩu không chính xác", false));
            }
        }
    }
}
