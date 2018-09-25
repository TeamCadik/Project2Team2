package com.revature.data;

import java.util.Set;

import com.revature.beans.Weapon;

public interface WeaponDAO {
	public Weapon addWeapon(Weapon weapon);
	public Weapon getWeapon(int weaponId);
	public Set<Weapon> getAllWeapons();
	public void updateWeapon(Weapon weapon);
	public void deleteWeapon(Weapon weapon);

}
