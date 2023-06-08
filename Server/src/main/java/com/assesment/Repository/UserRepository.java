package com.assesment.Repository;

import com.assesment.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,String> {

    @Query(value ="SELECT rank FROM ( SELECT name, id, (SELECT COUNT(*) FROM (SELECT DISTINCT id FROM user) AS t2 WHERE t2.id >= t1.id) AS rank FROM user AS t1) AS ranked_table WHERE name = :name ",nativeQuery = true)
     int findRank(@Param("name") String name);

}
