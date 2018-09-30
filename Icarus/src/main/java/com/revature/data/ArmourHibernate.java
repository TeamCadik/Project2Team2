package com.revature.data;

import java.util.List;

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
	public List<Armour> getAllArmour() {
		Session s = hu.getSession();
		String query = "FROM Armour";
		Query<Armour> q = s.createQuery(query, Armour.class);
		List<Armour> armourList = q.getResultList();
		return armourList;	
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
