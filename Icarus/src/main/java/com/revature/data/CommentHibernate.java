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

import com.revature.beans.Comment;
import com.revature.utils.HibernateUtil;

@Component
public class CommentHibernate implements CommentDAO{
	@Autowired
	private HibernateUtil hu;
	
	
	@Override
	public Comment addComment(Comment comment) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		try {
			s.save(comment);
			t.commit();
		} catch(HibernateException e) {
			t.rollback();
		} finally {
			s.close();
		}
		return comment;
	}

	@Override
	public Set<Comment> getAllCommentsByBuild(int buildId) {
		Session s = hu.getSession();
		String query = "FROM comment where buildId=:buildId";
		Query<Comment> q =  s.createQuery(query, Comment.class);
		List<Comment> commentList = q.getResultList();
		Set<Comment> commentSet = new HashSet<Comment>();
		commentSet.addAll(commentList);
		return commentSet;
	}

}
