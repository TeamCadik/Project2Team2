package com.revature.beans;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="character")
public class Character {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="character")
	@SequenceGenerator(name="character", sequenceName="character_seq", allocationSize=1)
	private Integer characterId;
	private Integer userId;
	private String characterName;
	private Integer characterlevel;
	private Integer strength;
	private Integer intelligence;
	private Integer dexterity;
	private Integer hp;
	private Integer defense;
	private Integer attack;
	@OneToMany(fetch=FetchType.EAGER, mappedBy="buildId")
	private Set<Build> builds;
	private String charImg;
	
	public Character() {
		super();
	}

	public String getCharImg() {
		return charImg;
	}

	public void setCharImg(String charImg) {
		this.charImg = charImg;
	}

	public Set<Build> getBuilds() {
		return builds;
	}

	public void setBuilds(Set<Build> builds) {
		this.builds = builds;
	}

	public Integer getCharacterId() {
		return characterId;
	}

	public void setCharacterId(Integer characterId) {
		this.characterId = characterId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
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
		result = prime * result + ((builds == null) ? 0 : builds.hashCode());
		result = prime * result + ((charImg == null) ? 0 : charImg.hashCode());
		result = prime * result + ((characterId == null) ? 0 : characterId.hashCode());
		result = prime * result + ((characterName == null) ? 0 : characterName.hashCode());
		result = prime * result + ((characterlevel == null) ? 0 : characterlevel.hashCode());
		result = prime * result + ((defense == null) ? 0 : defense.hashCode());
		result = prime * result + ((dexterity == null) ? 0 : dexterity.hashCode());
		result = prime * result + ((hp == null) ? 0 : hp.hashCode());
		result = prime * result + ((intelligence == null) ? 0 : intelligence.hashCode());
		result = prime * result + ((strength == null) ? 0 : strength.hashCode());
		result = prime * result + ((userId == null) ? 0 : userId.hashCode());
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
		if (builds == null) {
			if (other.builds != null)
				return false;
		} else if (!builds.equals(other.builds))
			return false;
		if (charImg == null) {
			if (other.charImg != null)
				return false;
		} else if (!charImg.equals(other.charImg))
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
		if (userId == null) {
			if (other.userId != null)
				return false;
		} else if (!userId.equals(other.userId))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Character [characterId=" + characterId + ", userId=" + userId + ", characterName=" + characterName
				+ ", characterlevel=" + characterlevel + ", strength=" + strength + ", intelligence=" + intelligence
				+ ", dexterity=" + dexterity + ", hp=" + hp + ", defense=" + defense + ", attack=" + attack
				+ ", builds=" + builds + ", charImg=" + charImg + "]";
	}
}
