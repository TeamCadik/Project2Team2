package com.revature.controllers;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.data.CharacterDAO;
import com.revature.beans.Character;

@RestController
@RequestMapping(value="/profile")
public class CharacterController {

	@Autowired
	private CharacterDAO cd;
	
	@RequestMapping(method=RequestMethod.GET)
	public Set<Character> getAll() {
		return cd.getAllCharacters();
	}
}
