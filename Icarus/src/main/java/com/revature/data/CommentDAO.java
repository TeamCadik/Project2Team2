package com.revature.data;

import java.util.Set;

import com.revature.beans.Comment;

public interface CommentDAO {
	public int addComment(Comment comment);
	public Set<Comment> getAllCommentsByBuild(int buildId);

}
