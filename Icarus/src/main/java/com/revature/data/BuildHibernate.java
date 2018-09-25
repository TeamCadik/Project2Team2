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

import com.revature.beans.Build;
import com.revature.utils.HibernateUtil;

@Component
public class BuildHibernate implements BuildDAO{
	@Autowired
	private HibernateUtil hu;

	@Override
	public Build addBuild(Build build) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		s.save(build);
		t.commit();
		s.close();
		return build;
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
		List<Build> buildList = s.createQuery("From com.revature.beans.Build", Build.class).list();
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
