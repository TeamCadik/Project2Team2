package com.revature.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.data.CharacterDAO;
import com.revature.beans.Build;
import com.revature.beans.Character;
import com.revature.beans.User;

@RestController
//@RequestMapping(value="/character")
@CrossOrigin(origins = "http://localhost:4200")
public class CharacterController {

	@Autowired
	private CharacterDAO cd;
	
	@RequestMapping(value="/profile/{id}", method=RequestMethod.GET)
	public Set<Character> getCharactersByUser(@PathVariable("id") int id) {
		//int id = u.getUserId();
		System.out.println("USERID: " + id);
		return cd.getAllCharactersByUser(id);
	}
	
	@RequestMapping(value="/character/{id}", method=RequestMethod.GET)
	public Character getCharacter(@PathVariable("id") int id) {
		return cd.getCharacterById(id);
	}
	
	@RequestMapping(value="/character", method=RequestMethod.POST)
	public Set<Character> addCharacter(@RequestBody Character c) {
		cd.addCharacter(c);
		return cd.getAllCharactersByUser(c.getUserId());
	}
	
	@RequestMapping(value="/character/{id}", method=RequestMethod.PUT)
	public void updateCharacter(@RequestBody Character c) {
		cd.updateCharacter(c);
	}
	
	@RequestMapping(value="/character/{id}", method=RequestMethod.DELETE)
	public void deleteCharacter(@PathVariable("id") int id) {
		Character c = cd.getCharacterById(id);
		cd.deleteCharacter(c);
	}
}