package com.revature.data;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.User;
import com.revature.utils.HibernateUtil;

@Component
public class UserHibernate implements UserDAO{
	@Autowired
	private HibernateUtil hu;

	@Override
	public User addUser(User user) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		s.save(user);
		t.commit();
		s.close();
		return user;
	}

	@Override
	public User getUser(String username, String password) {
		Session s = hu.getSession();
		String query = "FROM Character where username=:username and password=:password";
		Query<User> user =  s.createQuery(query, User.class);
		return (User) user;
	}

	@Override
	public User getUserById(int userId) {
		Session s = hu.getSession();
		User user = s.get(User.class, userId);
		s.close();
		return user;
	}

	@Override
	public void deleteUser(User user) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		s.update(user);
		t.commit();
		s.close();				
	}

	@Override
	public void updateUser(User user) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		s.delete(user);
		t.commit();
		s.close();			
	}

}
