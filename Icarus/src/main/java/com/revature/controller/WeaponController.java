package com.revature.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Weapon;
import com.revature.data.WeaponDAO;

@RestController
@RequestMapping(value="/weapons")
@CrossOrigin(origins="http://localhost:4200")
public class WeaponController {
	@Autowired
	WeaponDAO wd;
	
	@RequestMapping(method=RequestMethod.GET)
	public Set<Weapon> getAllWeapons() {
		return wd.getAllWeapon();
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.GET)
	public Weapon getWeapon(@PathVariable("id") int id) {
		return wd.getWeapon(id);
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public Set<Weapon> addWeapon(@RequestBody Weapon w) {
		wd.addWeapon(w);
		return wd.getAllWeapon();
	}
	
	@RequestMapping(value="/weapon/{id}", method=RequestMethod.PUT)
	public void updateWeapon(@RequestBody Weapon w) {
		wd.updateWeapon(w);
	}
}
