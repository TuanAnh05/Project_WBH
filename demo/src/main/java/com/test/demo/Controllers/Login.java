package com.test.demo.Controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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

    @GetMapping(value = "/login")
    public boolean Login(@RequestBody User userReq){

        String username = userReq.getUsername();
        String password = userReq.getPassword();
        Optional<User> user=repoUser.findByUsername(username);
        if(user.isEmpty()==false){
            Optional<User> user1=repoUser.findByPassword(password);
            if(user1.isEmpty()==false){
                return true;
            }else
            {
                return false;
            }
        }

        return false;
    }
}
