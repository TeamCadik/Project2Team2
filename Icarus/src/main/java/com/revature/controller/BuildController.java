package com.revature.controller;



import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Build;
import com.revature.data.BuildDAO;

@RestController
@RequestMapping(value="/builds")
@CrossOrigin(origins = "http://localhost:4200")
public class BuildController {

	@Autowired
	private BuildDAO bd;
	
	@RequestMapping(method=RequestMethod.GET)
	public Set<Build> getAll() {
		return bd.getAllBuilds();
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.GET)
	public Build getBear(@PathVariable("id") int id) {
		return bd.getBuildById(id);
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public Set<Build> addBear(@RequestBody Build b) {
		bd.addBuild(b);
		return bd.getAllBuilds();
	}
}
