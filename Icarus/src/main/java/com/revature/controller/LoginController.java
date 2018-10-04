package com.revature.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.beans.User;
import com.revature.services.LoginService;

@Controller
@RequestMapping(value="/login")
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {
	@Autowired
	private LoginService ls;
	
	@RequestMapping(method=RequestMethod.GET)
	public @ResponseBody User login(HttpSession session) {
		return (User) session.getAttribute("loggedUser");
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public @ResponseBody User login(@RequestParam("user") String username, 
			@RequestParam("pass") String password, HttpSession session) {
		User u = ls.login(username, password);
		if(u == null) {
			return null;
		}
		User loggedUser = u;
		session.setAttribute("loggedUser", loggedUser);
		return loggedUser;
	}
	
	@RequestMapping(method=RequestMethod.DELETE)
	public void logout(HttpSession session) {
		session.invalidate();
	}
}
