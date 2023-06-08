package com.assesment.Service;

import com.assesment.Entity.User;

import java.util.List;

public interface UserService {
    //save
     User saveuser(User user);
    //read
    List<User> fetchUserList();

    User getuser(String id);
    //delete
    void deleteuserbyid(String id);
    int getRank(String id);
    void setResult(String id);
    //update
    User updateScore(User user, String id);
}
