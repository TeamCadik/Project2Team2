package com.revature.data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import com.revature.beans.Weapon;
import com.revature.utils.HibernateUtil;

public class WeaponHibernate implements WeaponDAO{
	private HibernateUtil hu = HibernateUtil.getInstance();

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
	public Set<Weapon> getAllWeapon() {
		Session s = hu.getSession();
		String query = "FROM Weapon";
		Query<Weapon> q = s.createQuery(query, Weapon.class);
		List<Weapon> weaponList = q.getResultList();
		Set<Weapon> weaponSet = new HashSet<Weapon>();
		weaponSet.addAll(weaponList);
		return weaponSet;
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
