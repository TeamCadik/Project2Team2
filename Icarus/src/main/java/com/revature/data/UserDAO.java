package com.revature.data;

import com.revature.beans.User;

public interface UserDAO {
	public int addUser(User user);
	public User getUser(String usernam);
	public User getUserById(int userId);
	public void deleteUser(User user);
	public void updateUser(User user);
}
