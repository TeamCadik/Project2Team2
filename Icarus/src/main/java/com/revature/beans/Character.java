package com.revature.beans;

import java.util.Set;

public class Character {

	private Integer characterId;
	private Integer headId;
	private String characterName;
	private Integer characterlevel;
	private Integer strength;
	private Integer intelligence;
	private Integer dexterity;
	private Integer hp;
	private Integer defense;
	private Integer attack;
	private Set<Build> builds;
	
	public Character() {
		super();
	}

	public Integer getCharacterId() {
		return characterId;
	}

	public void setCharacterId(Integer characterId) {
		this.characterId = characterId;
	}

	public Integer getHeadId() {
		return headId;
	}

	public void setHeadId(Integer headId) {
		this.headId = headId;
	}

	public String getCharacterName() {
		return characterName;
	}

	public void setCharacterName(String characterName) {
		this.characterName = characterName;
	}

	public Integer getCharacterlevel() {
		return characterlevel;
	}

	public void setCharacterlevel(Integer characterlevel) {
		this.characterlevel = characterlevel;
	}

	public Integer getStrength() {
		return strength;
	}

	public void setStrength(Integer strength) {
		this.strength = strength;
	}

	public Integer getIntelligence() {
		return intelligence;
	}

	public void setIntelligence(Integer intelligence) {
		this.intelligence = intelligence;
	}

	public Integer getDexterity() {
		return dexterity;
	}

	public void setDexterity(Integer dexterity) {
		this.dexterity = dexterity;
	}

	public Integer getHp() {
		return hp;
	}

	public void setHp(Integer hp) {
		this.hp = hp;
	}

	public Integer getDefense() {
		return defense;
	}

	public void setDefense(Integer defense) {
		this.defense = defense;
	}

	public Integer getAttack() {
		return attack;
	}

	public void setAttack(Integer attack) {
		this.attack = attack;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((attack == null) ? 0 : attack.hashCode());
		result = prime * result + ((characterId == null) ? 0 : characterId.hashCode());
		result = prime * result + ((characterName == null) ? 0 : characterName.hashCode());
		result = prime * result + ((characterlevel == null) ? 0 : characterlevel.hashCode());
		result = prime * result + ((defense == null) ? 0 : defense.hashCode());
		result = prime * result + ((dexterity == null) ? 0 : dexterity.hashCode());
		result = prime * result + ((headId == null) ? 0 : headId.hashCode());
		result = prime * result + ((hp == null) ? 0 : hp.hashCode());
		result = prime * result + ((intelligence == null) ? 0 : intelligence.hashCode());
		result = prime * result + ((strength == null) ? 0 : strength.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Character other = (Character) obj;
		if (attack == null) {
			if (other.attack != null)
				return false;
		} else if (!attack.equals(other.attack))
			return false;
		if (characterId == null) {
			if (other.characterId != null)
				return false;
		} else if (!characterId.equals(other.characterId))
			return false;
		if (characterName == null) {
			if (other.characterName != null)
				return false;
		} else if (!characterName.equals(other.characterName))
			return false;
		if (characterlevel == null) {
			if (other.characterlevel != null)
				return false;
		} else if (!characterlevel.equals(other.characterlevel))
			return false;
		if (defense == null) {
			if (other.defense != null)
				return false;
		} else if (!defense.equals(other.defense))
			return false;
		if (dexterity == null) {
			if (other.dexterity != null)
				return false;
		} else if (!dexterity.equals(other.dexterity))
			return false;
		if (headId == null) {
			if (other.headId != null)
				return false;
		} else if (!headId.equals(other.headId))
			return false;
		if (hp == null) {
			if (other.hp != null)
				return false;
		} else if (!hp.equals(other.hp))
			return false;
		if (intelligence == null) {
			if (other.intelligence != null)
				return false;
		} else if (!intelligence.equals(other.intelligence))
			return false;
		if (strength == null) {
			if (other.strength != null)
				return false;
		} else if (!strength.equals(other.strength))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Character [characterId=" + characterId + ", headId=" + headId + ", characterName=" + characterName
				+ ", characterlevel=" + characterlevel + ", strength=" + strength + ", intelligence=" + intelligence
				+ ", dexterity=" + dexterity + ", hp=" + hp + ", defense=" + defense + ", attack=" + attack + "]";
	}
}
