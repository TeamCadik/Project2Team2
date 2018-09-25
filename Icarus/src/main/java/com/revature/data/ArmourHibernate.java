package com.revature.data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Armour;
import com.revature.utils.HibernateUtil;

@Component
public class ArmourHibernate implements ArmourDAO{
	@Autowired
	private HibernateUtil hu;


	@Override
	public Armour addArmour(Armour armour) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		s.save(armour);
		t.commit();
		s.close();
		return armour;
	}

	@Override
	public Armour getArmour(int armourId) {
		Session s = hu.getSession();
		Armour armour = s.get(Armour.class, armourId);
		s.close();
		return armour;
	}

	@Override
	public Set<Armour> getAllArmour() {
		Session s = hu.getSession();
		List<Armour> armourList = s.createQuery("From com.revature.beans.Armour", Armour.class).list();
		Set<Armour> armourSet = new HashSet<Armour>();
		armourSet.addAll(armourList);
		return armourSet;
	}

	@Override
	public void updateArmour(Armour armour) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		s.update(armour);
		t.commit();
		s.close();		
	}

	@Override
	public void deleteArmour(Armour armour) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		s.delete(armour);
		t.commit();
		s.close();		
	}

}
