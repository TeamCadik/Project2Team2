package com.revature.data;

import java.util.List;

import com.revature.beans.Armour;

public interface ArmourDAO {
	public int addArmour(Armour armour);
	public Armour getArmour(int armourId);
	public List<Armour> getAllArmour();
	public void updateArmour(Armour armour);
	public void deleteArmour (Armour armour);

}
