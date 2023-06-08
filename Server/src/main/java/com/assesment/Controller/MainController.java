package com.assesment.Controller;

import com.assesment.Entity.User;
import com.assesment.Repository.UserRepository;
import com.assesment.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path="/api/v1/")
public class MainController {
    @Autowired
    private UserService userService;
    private UserRepository userRepository;
    //save working
    @PostMapping("/adduser")
    public User saveuser(@RequestBody User user)
    {
        return userService.saveuser(user);
    }
    //read working
    @GetMapping("/getusers")
    public List<User> fetchuserlist(){
        return userService.fetchUserList();
    }
    @GetMapping("/getuser/{id}")
    public User getuser(@PathVariable("id") String id)
    {
        return userService.getuser(id);
    }
    //delete working
    @DeleteMapping("/users/delete/{id}")
    public String deleteuserbyid(@PathVariable("id") String id)
    {
        userService.deleteuserbyid(id);
        return "Deleted Successfully";
    }
    //update working
    @PutMapping("/userup/{id}")
    public User updateScore(@RequestBody User user, @PathVariable("id") String id)
    {
        return userService.updateScore(user,id);
    }
    // get Rank
    @GetMapping("/getrank/{id}")
    public int getRank(@PathVariable("id") String id)
    {
      return   userService.getRank(id);
    }

}