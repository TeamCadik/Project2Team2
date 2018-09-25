package com.revature.data;

import java.util.Set;

import com.revature.beans.Comment;

public interface CommentDAO {
	public Comment addComment(Comment comment);
	public Set<Comment> getAllCommentsByBuild(int buildId);

}
