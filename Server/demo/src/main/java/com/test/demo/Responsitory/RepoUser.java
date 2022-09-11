package com.test.demo.Responsitory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.test.demo.Models.User;

public interface RepoUser extends JpaRepository<User,Long>{
    @Query(value = "call login(:inusername,:inpassword);", nativeQuery = true)
    List<User> Login(@Param("inusername") String inusername,@Param("inpassword") String inpassword);
}
