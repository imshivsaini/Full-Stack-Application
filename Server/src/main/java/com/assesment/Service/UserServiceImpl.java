package com.assesment.Service;

import com.assesment.Entity.User;
import com.assesment.Exception.ResourceNotFoundException;
import com.assesment.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service

public class UserServiceImpl implements  UserService {
    @Autowired
    private UserRepository userRepository;

    //save
    @Override
    public User saveuser(User user) {
         userRepository.save(user) ;
        setResult(user.getName());
         return user;
    }

    //read
    @Override
    public List<User> fetchUserList() {
        return (List<User>)
                userRepository.findAll();
    }
    @Override
    public User getuser(String id) {
        return userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id));
    }
    @Override
    public int getRank(String id)
    {
        //System.out.println(id);
        return userRepository.findRank(id);
    }

    @Override
    public void setResult(String id) {
        User userdb = userRepository.findById(id).get();
        int n = userdb.getScore();
        if(n/24>30)
        {
            userdb.setResult("Pass");
        }
        else {
            userdb.setResult("Fail");
        }
        userRepository.save(userdb);
    }

    @Override
    public void deleteuserbyid(String id) {

        userRepository.deleteById(id);
    }

    @Override
    public User updateScore(User user, String id) {

        User userdb = userRepository.findById(id).get();

        if (Objects.nonNull(user.getAddress()) && !"".equalsIgnoreCase(user.getAddress())) {
                userdb.setAddress(user.getAddress());
            }
        if (Objects.nonNull(user.getCity()) && !"".equalsIgnoreCase(user.getCity())) {
                    userdb.setCity(user.getCity());
                }
        if (Objects.nonNull(user.getPincode()) && !"".equalsIgnoreCase(user.getPincode())) {
                        userdb.setPincode(user.getPincode());
                    }
        if (Objects.nonNull(user.getCountry()) && !"".equalsIgnoreCase(user.getCountry())) {
                            userdb.setCountry(user.getCountry());
                        }
        if (Objects.nonNull(user.getScore())) {
            userdb.setScore(user.getScore());
        }

        return userRepository.save(userdb);
    }
}