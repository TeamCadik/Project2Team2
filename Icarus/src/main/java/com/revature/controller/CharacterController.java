package com.revature.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.data.CharacterDAO;
import com.revature.beans.Build;
import com.revature.beans.Character;

@RestController
@RequestMapping(value="/character")
@CrossOrigin(origins = "http://localhost:4200")
public class CharacterController {

	@Autowired
	private CharacterDAO cd;
	
	@RequestMapping(method=RequestMethod.GET)
	public Set<Character> getAll() {
		return cd.getAllCharacters();
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.GET)
	public Character getCharacter(@PathVariable("id") int id) {
		return cd.getCharacterById(id);
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public Set<Character> addCharacter(@RequestBody Character c) {
		cd.addCharacter(c);
		return cd.getAllCharacters();
	}
}