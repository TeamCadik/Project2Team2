package com.revature.data;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import com.revature.beans.User;
import com.revature.utils.HibernateUtil;

public class UserHibernate implements UserDAO{
	private HibernateUtil hu = HibernateUtil.getInstance();

	@Override
	public int addUser(User user) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		Integer id = 0;
		try {
			id = (Integer) s.save(user);
			t.commit();
		} catch(HibernateException e) {
			t.rollback();
		} finally {
			s.close();
		}
		return id;
	}

	@Override
	public User getUser(String username) {
		Session s = hu.getSession();
		String query = "FROM Character where username=:username";
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
