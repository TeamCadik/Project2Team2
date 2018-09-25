package com.revature.data;

import java.util.Set;

import com.revature.beans.Build;

public interface BuildDAO {
	public int addBuild(Build build);
	public Build getBuildById(int buildId);
	public Set<Build> getAllBuilds();
	public Set<Build> getAllBuildsByCharacter(int characterId);
	public void deleteBuild(Build build);
	public void updateBuild(Build build);
	

}
