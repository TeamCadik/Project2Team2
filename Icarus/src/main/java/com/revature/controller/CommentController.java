package com.revature.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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

	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public Set<Comment> getComm(@PathVariable("id") int id) {
		return cd.getAllCommentsByBuild(id);
	}

	@RequestMapping(value = "{id}", method = RequestMethod.POST)
	public Set<Comment> addComms(@PathVariable("id") int id, @RequestBody Comment comm) {
		comm.setBuildId(id);
		cd.addComment(comm);
		System.out.println("Posting");
		System.out.println(id);
		
		return cd.getAllCommentsByBuild(comm.getBuildId());
	}
}
