package com.assesment.Entity;

import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;

@Entity
@Table(name = "User")
public class User {
    @Id
    @Column(name = "name")
    private String  name;
    @Column(name = "Address")
    private String Address;
    @Column(name = "City")
    private String City;
    @Column(name = "Country")
    private String Country;
    @Column(name = "PinCode")
    private String Pincode;
    @Column(name = "id")
    private int score;
    @Column(name = "result")
    private String result;

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getCity() {
        return City;
    }

    public void setCity(String city) {
        City = city;
    }

    public String getCountry() {
        return Country;
    }

    public void setCountry(String country) {
        Country = country;
    }

    public String getPincode() {
        return Pincode;
    }

    public void setPincode(String pincode) {
        Pincode = pincode;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", Address='" + Address + '\'' +
                ", City='" + City + '\'' +
                ", Country='" + Country + '\'' +
                ", Pincode='" + Pincode + '\'' +
                ", score=" + score +
                '}';
    }

    public User() {
    }

    public User(String name, String address, String city, String country, String pincode, int score) {
        this.name = name;
        Address = address;
        City = city;
        Country = country;
        Pincode = pincode;
        this.score = score;
    }
}
