package com.imaginea.user_registration.dao;

import com.imaginea.user_registration.pojo.User;

import java.sql.SQLException;
import java.util.List;

/**
 * <h1> UserDao.class</h1>
 * This interface is list of abstract methods 
 * which are implemented in subclasses to perform operations triggered from UI.
 * 
 * @author maninders
 */
public interface UserDao {

    public List<User> getAllUsers() throws SQLException, ClassNotFoundException;
    public User getUser(int userId) throws SQLException, ClassNotFoundException;
    public boolean insertUser(User user) throws SQLException, ClassNotFoundException;
    public boolean updateUser(User user) throws SQLException, ClassNotFoundException;
    public boolean deleteUser(int userId) throws SQLException, ClassNotFoundException;
}
