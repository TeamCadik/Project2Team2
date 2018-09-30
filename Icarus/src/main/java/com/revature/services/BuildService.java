package com.revature.services;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Build;
import com.revature.data.BuildDAO;

@Service
public class BuildService {
	
	@Autowired
	private BuildDAO bd;
	
	public Set<Build> getAllBuilds() {
		return bd.getAllBuilds();
	}
	
	public Build getBuildById(int id) {
		return bd.getBuildById(id);
	}
	
	public Set<Build> addBuild(Build b) {
		bd.addBuild(b);
		return bd.getAllBuilds();
	}
}
