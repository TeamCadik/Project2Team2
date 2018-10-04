package com.revature.data;

import java.util.Set;

import com.revature.beans.Armour;

public interface ArmourDAO {
	public int addArmour(Armour armour);
	public Armour getArmour(int armourId);
	public Set<Armour> getAllArmour();
	public void updateArmour(Armour armour);
	public void deleteArmour (Armour armour);

}
