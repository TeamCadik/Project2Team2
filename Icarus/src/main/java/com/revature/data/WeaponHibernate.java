package com.revature.data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Weapon;
import com.revature.utils.HibernateUtil;

@Component
public class WeaponHibernate implements WeaponDAO{
	@Autowired
	private HibernateUtil hu;

	@Override
	public Weapon addWeapon(Weapon weapon) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		try {
			s.save(weapon);
			t.commit();
		} catch(HibernateException e) {
			t.rollback();
		} finally {
			s.close();
		}
		return weapon;
	}

	@Override
	public Weapon getWeapon(int weaponId) {
		Session s = hu.getSession();
		Weapon weapon = s.get(Weapon.class, weaponId);
		s.close();
		return weapon;
	}

	@Override
	public Set<Weapon> getAllWeapons() {
		Session s = hu.getSession();
		List<Weapon> weaponList = s.createQuery("From com.revature.beans.Weapon", Weapon.class).list();
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
