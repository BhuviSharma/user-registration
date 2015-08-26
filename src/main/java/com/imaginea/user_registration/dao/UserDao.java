package com.imaginea.user_registration.dao;

import com.imaginea.user_registration.pojo.User;

import java.sql.SQLException;
import java.util.List;

/**
 * Created by maninders on 25/8/15.
 */
public interface UserDao {

    public List<User> getAllUsers() throws SQLException, ClassNotFoundException;
    public User getUser(int userId) throws SQLException, ClassNotFoundException;
    public void insertUser(User user) throws SQLException, ClassNotFoundException;
    public void updateUser(User user) throws SQLException, ClassNotFoundException;
    public void deleteUser(User user) throws SQLException, ClassNotFoundException;
}
