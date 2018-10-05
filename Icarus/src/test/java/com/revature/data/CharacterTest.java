package com.revature.data;

import static org.junit.Assert.assertEquals;

import org.apache.log4j.Logger;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import com.revature.beans.Character;

public class CharacterTest {
	private static Logger log = Logger.getLogger(CharacterTest.class);
	
	@Autowired
	private static CharacterDAO cd;
	private static Character c;
	
	@BeforeClass
	public static void setupClass() {
		log.trace("Before Character");
		c = new Character();
	}
	
	@Test
	public void testAddCharacter() {
		log.trace("Testing if you can add a character.");
		c = cd.getCharacterById(this.c.getCharacterId());
		assertEquals(this.c.getCharacterlevel(), c.getCharacterlevel());
	}
}
