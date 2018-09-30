package com.revature.data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Character;
import com.revature.utils.HibernateUtil;

@Component
public class CharacterHibernate implements CharacterDAO{
	@Autowired
	private HibernateUtil hu;

	@Override
	public Character addCharacter(Character character) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		try {
			s.save(character);
			t.commit();
		} catch(HibernateException e) {
			t.rollback();
		} finally {
			s.close();
		}
		return character;
	}

	@Override
	public Character getCharacterById(int characterId) {
		Session s = hu.getSession();
		Character character = s.get(Character.class, characterId);
		s.close();
		return character;
	}

	@Override
	public Set<Character> getAllCharacters() {
		Session s = hu.getSession();
		List<Character> charList = s.createQuery("From com.revature.beans.Character", Character.class).list();
		Set<Character> charSet = new HashSet<Character>();
		charSet.addAll(charList);
		return charSet;
	}
	
	@Override
	public Set<Character> getAllCharactersByUser(int userId) {
		Session s = hu.getSession();
		String query = "FROM Character where userId=:userId";
		Query<Character> q = s.createQuery(query, Character.class);
		List<Character> charList = q.getResultList();
		Set<Character> charSet = new HashSet<Character>();
		charSet.addAll(charList);
		return charSet;
	}

	@Override
	public void deleteCharacter(Character character) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		s.update(character);
		t.commit();
		s.close();				
	}

	@Override
	public void updateCharacter(Character character) {
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		s.delete(character);
		t.commit();
		s.close();			
	}



}
