package com.revature.data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import com.revature.beans.Build;
import com.revature.utils.HibernateUtil;

public class BuildHibernate implements BuildDAO{
	private HibernateUtil hu = HibernateUtil.getInstance();

	@Override
	public int addBuild(Build build) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		Integer id = 0;
		try {
			id = (Integer) s.save(build);
			t.commit();
		} catch(HibernateException e) {
			t.rollback();
		} finally {
			s.close();
		}
		return id;
	}

	@Override
	public Build getBuildById(int buildId) {
		Session s = hu.getSession();
		Build build = s.get(Build.class, buildId);
		s.close();
		return build;
	}

	@Override
	public Set<Build> getAllBuilds() {
		Session s = hu.getSession();
		String query = "FROM Build";
		Query<Build> q = s.createQuery(query, Build.class);
		List<Build> buildList = q.getResultList();
		Set<Build> buildSet = new HashSet<Build>();
		buildSet.addAll(buildList);
		return buildSet;
	}

	@Override
	public Set<Build> getAllBuildsByCharacter(int characterId) {
		Session s = hu.getSession();
		String query = "FROM Build where characterId=:characterId";
		Query<Build> q = s.createQuery(query, Build.class);
		List<Build> buildList = q.getResultList();
		Set<Build> buildSet = new HashSet<Build>();
		buildSet.addAll(buildList);
		return buildSet;
	}

	@Override
	public void deleteBuild(Build build) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		s.update(build);
		t.commit();
		s.close();			
	}

	@Override
	public void updateBuild(Build build) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		s.delete(build);
		t.commit();
		s.close();				
	}

}
