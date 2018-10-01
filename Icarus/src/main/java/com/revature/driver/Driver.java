package com.revature.driver;

import com.revature.beans.Build;
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
<<<<<<< HEAD
<<<<<<< HEAD
		
=======
>>>>>>> 76b30ef6c2e1bddadd32220c24d00377d809e0c3
=======
>>>>>>> 76b30ef6c2e1bddadd32220c24d00377d809e0c3
	}
}
