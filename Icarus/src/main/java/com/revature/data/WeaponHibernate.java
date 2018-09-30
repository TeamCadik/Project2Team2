package com.revature.data;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Weapon;
import com.revature.utils.HibernateUtil;

@Component
public class WeaponHibernate implements WeaponDAO{
	@Autowired
	private HibernateUtil hu;

	@Override
	public int addWeapon(Weapon weapon) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		Integer id = 0;
		try {
			id = (Integer) s.save(weapon);
			t.commit();
		} catch(HibernateException e) {
			t.rollback();
		} finally {
			s.close();
		}
		return id;
	}

	@Override
	public Weapon getWeapon(int weaponId) {
		Session s = hu.getSession();
		Weapon weapon = s.get(Weapon.class, weaponId);
		s.close();
		return weapon;
	}

	@Override
	public List<Weapon> getAllWeapon() {
		Session s = hu.getSession();
		String query = "FROM Weapon";
		Query<Weapon> q = s.createQuery(query, Weapon.class);
		List<Weapon> weaponList = q.getResultList();
		return weaponList;
	}

	@Override
	public void updateWeapon(Weapon weapon) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		s.update(weapon);
		t.commit();
		s.close();			
	}

	@Override
	public void deleteWeapon(Weapon weapon) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		s.delete(weapon);
		t.commit();
		s.close();			
	}

}
