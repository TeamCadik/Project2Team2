package com.revature.data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import com.revature.beans.Armour;
import com.revature.utils.HibernateUtil;

public class ArmourHibernate implements ArmourDAO{
	private HibernateUtil hu = HibernateUtil.getInstance();


	@Override
	public int addArmour(Armour armour) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		Integer id = 0;
		try {
			id = (Integer) s.save(armour);
			t.commit();
		} catch(HibernateException e) {
			t.rollback();
		} finally {
			s.close();
		}
		return id;
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
		String query = "FROM Armour";
		Query<Armour> q = s.createQuery(query, Armour.class);
		List<Armour> armourList = q.getResultList();
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
