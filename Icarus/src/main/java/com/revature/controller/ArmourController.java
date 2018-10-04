package com.revature.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Armour;
import com.revature.data.ArmourDAO;

@RestController
@RequestMapping(value = "/armours")
@CrossOrigin(origins = "http://localhost:4200")
public class ArmourController {

	@Autowired
	ArmourDAO ad;

	@RequestMapping(method = RequestMethod.GET)
	public Set<Armour> getAllArmour() {
		return ad.getAllArmour();
	}

	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public Armour getArmour(@PathVariable("id") int id) {
		return ad.getArmour(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	public Set<Armour> addArmour(@RequestBody Armour a) {
		ad.addArmour(a);
		return ad.getAllArmour();
	}

	@RequestMapping(value = "/armour/{id}", method = RequestMethod.PUT)
	public void updateArmour(@RequestBody Armour a) {
		ad.updateArmour(a);
	}
}
