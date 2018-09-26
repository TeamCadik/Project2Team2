package com.revature.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="weapon")
public class Weapon {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="weapon")
	@SequenceGenerator(name="weapon", sequenceName="weapon_seq", allocationSize=1)
	@JoinColumn(name="weaponId", insertable=false, updatable=false)
	private Integer weaponId;
	private String weaponType;
	private Integer attackModifier;
	private Integer defenseModifier;
	private String description;
	
	public Weapon() {
		super();
	}

	public Integer getWeaponId() {
		return weaponId;
	}

	public void setWeaponId(Integer weaponId) {
		this.weaponId = weaponId;
	}

	public String getWeaponType() {
		return weaponType;
	}

	public void setWeaponType(String weaponType) {
		this.weaponType = weaponType;
	}

	public Integer getAttackModifier() {
		return attackModifier;
	}

	public void setAttackModifier(Integer attackModifier) {
		this.attackModifier = attackModifier;
	}

	public Integer getDefenseModifier() {
		return defenseModifier;
	}

	public void setDefenseModifier(Integer defenseModifier) {
		this.defenseModifier = defenseModifier;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((attackModifier == null) ? 0 : attackModifier.hashCode());
		result = prime * result + ((defenseModifier == null) ? 0 : defenseModifier.hashCode());
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((weaponId == null) ? 0 : weaponId.hashCode());
		result = prime * result + ((weaponType == null) ? 0 : weaponType.hashCode());
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
		Weapon other = (Weapon) obj;
		if (attackModifier == null) {
			if (other.attackModifier != null)
				return false;
		} else if (!attackModifier.equals(other.attackModifier))
			return false;
		if (defenseModifier == null) {
			if (other.defenseModifier != null)
				return false;
		} else if (!defenseModifier.equals(other.defenseModifier))
			return false;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (weaponId == null) {
			if (other.weaponId != null)
				return false;
		} else if (!weaponId.equals(other.weaponId))
			return false;
		if (weaponType == null) {
			if (other.weaponType != null)
				return false;
		} else if (!weaponType.equals(other.weaponType))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Weapon [weaponId=" + weaponId + ", weaponType=" + weaponType + ", attackModifier=" + attackModifier
				+ ", defenseModifier=" + defenseModifier + ", description=" + description + "]";
	}
}
