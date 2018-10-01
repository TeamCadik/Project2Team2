package com.revature.controller;
<<<<<<< HEAD
<<<<<<< HEAD



import java.util.List;
=======
>>>>>>> 76b30ef6c2e1bddadd32220c24d00377d809e0c3
=======
>>>>>>> 76b30ef6c2e1bddadd32220c24d00377d809e0c3
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Build;
import com.revature.services.BuildService;

@RestController
@RequestMapping(value="/builds")
@CrossOrigin(origins = "http://localhost:4200")
public class BuildController {

	@Autowired
	private BuildService bs;
	@RequestMapping(method=RequestMethod.GET)
	public Set<Build> getAll() {
		Set<Build> allBuilds = bs.getAllBuilds();
		System.out.println(allBuilds);
		return bs.getAllBuilds();
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.GET)
	public Build getBuild(@PathVariable("id") int id) {
		return bs.getBuildById(id);
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public Set<Build> addBuild(@RequestBody Build b) {
		bs.addBuild(b);
		return bs.getAllBuilds();
	}
}
