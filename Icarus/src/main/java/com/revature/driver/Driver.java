package com.revature.driver;

import com.revature.beans.User;
import com.revature.data.UserDAO;
import com.revature.data.UserHibernate;

public class Driver {
	public static void main(String[] args) {
		testArmourDAO();
	}

	private static void testArmourDAO() {
		UserDAO ud = new UserHibernate();
		User user = ud.getUser("lenonc");
		System.out.println(user);
	}
}
