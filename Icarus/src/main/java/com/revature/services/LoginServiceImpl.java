package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.User;
import com.revature.data.UserDAO;

@Service
public class LoginServiceImpl implements LoginService{
	@Autowired
	private UserDAO ud;

	@Override
	public User login(String user, String pass) {
		User u = ud.getUser(user, pass);
		return u;
	}
}
