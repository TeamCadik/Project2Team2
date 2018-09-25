package com.revature.data;

import java.util.Set;

import com.revature.beans.Weapon;

public interface WeaponDAO {
	public int addWeapon(Weapon weapon);
	public Weapon getWeapon(int weaponId);
	public Set<Weapon> getAllWeapon();
	public void updateWeapon(Weapon weapon);
	public void deleteWeapon (Weapon weapon);

}
