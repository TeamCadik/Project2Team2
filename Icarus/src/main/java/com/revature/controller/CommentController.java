package com.revature.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Comment;
import com.revature.data.CommentDAO;

@RestController
@RequestMapping(value = "/set")
@CrossOrigin(origins = "http://localhost:4200")
public class CommentController {

	@Autowired
	private CommentDAO cd;

	@RequestMapping(method = RequestMethod.GET)
	public Integer addComm(Comment commsid) {
		return cd.addComment(commsid);
	}

	@RequestMapping(value = "{id}", method = RequestMethod.POST)
	public Set<Comment> getComms(@PathVariable("id") int id) {
		System.out.println(id);
		cd.getAllCommentsByBuild(id);
		return cd.getAllCommentsByBuild(id);
	}
}
