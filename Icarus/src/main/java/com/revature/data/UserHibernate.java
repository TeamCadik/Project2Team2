package com.revature.data;

import org.hibernate.HibernateException;
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
	public User getUser(String username, String password) {
		Session s = hu.getSession();
		String query = "from User u where u.username=:username and u.password=:password";
		Query<User> q =  s.createQuery(query, User.class);
		q.setParameter("username", username);
		q.setParameter("password", password);
		User u = q.getSingleResult();
		s.close();
		return (User) u;
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
