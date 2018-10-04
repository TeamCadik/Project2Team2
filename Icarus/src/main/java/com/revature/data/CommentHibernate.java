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
	public int addComment(Comment comment) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		Integer id = 0;
		try {
			id = (Integer) s.save(comment);
			t.commit();
		} catch(HibernateException e) {
			t.rollback();
		} finally {
			s.close();
		}
		return id;
	}

	@Override
	public Set<Comment> getAllCommentsByBuild(int id) {
		Session s = hu.getSession();
		String query = "from Comment where buildId = :id order by commentId asc";
		Query<Comment> q =  s.createQuery(query, Comment.class);
		q.setParameter("id", id);
		List<Comment> commentList = q.getResultList();
		Set<Comment> commentSet = new HashSet<Comment>();
		commentSet.addAll(commentList);
		return commentSet;
	}

}
