package com.revature.driver;

import com.revature.data.BuildDAO;
import com.revature.data.BuildHibernate;

public class Driver {
	private static BuildDAO bd = new BuildHibernate();
	public static void main(String[] args) {
		testArmourDAO();
	}

	private static void testArmourDAO() {
		/*Build testBuild = bd.getBuildById(1);
		System.out.println(testBuild.toString());*/
	}
}
