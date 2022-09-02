package com.test.demo.Responsitory;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.demo.Models.User;

public interface RepoUser extends JpaRepository<User,Long>{
    Optional<User> findByUsername(String username);
    Optional<User> findByPassword(String password);
}
