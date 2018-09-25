package com.revature.beans;

@Entity
@Table(name="armour")
public class Armour {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="armour")
	@SequenceGenerator(name="armour", sequenceName="armour_seq", allocationSize=1)
	private Integer armourId;
	private String armourType;
	private Integer defenseModifier;
	private String stat;
	private Integer statModifier;
	private String description;
	
	public Armour() {
		super();
	}

	public Integer getArmourId() {
		return armourId;
	}

	public void setArmourId(Integer armourId) {
		this.armourId = armourId;
	}

	public String getArmourType() {
		return armourType;
	}

	public void setArmourType(String armourType) {
		this.armourType = armourType;
	}

	public Integer getDefenseModifier() {
		return defenseModifier;
	}

	public void setDefenseModifier(Integer defenseModifier) {
		this.defenseModifier = defenseModifier;
	}

	public String getStat() {
		return stat;
	}

	public void setStat(String stat) {
		this.stat = stat;
	}

	public Integer getStatModifier() {
		return statModifier;
	}

	public void setStatModifier(Integer statModifier) {
		this.statModifier = statModifier;
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
		result = prime * result + ((armourId == null) ? 0 : armourId.hashCode());
		result = prime * result + ((armourType == null) ? 0 : armourType.hashCode());
		result = prime * result + ((defenseModifier == null) ? 0 : defenseModifier.hashCode());
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((stat == null) ? 0 : stat.hashCode());
		result = prime * result + ((statModifier == null) ? 0 : statModifier.hashCode());
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
		Armour other = (Armour) obj;
		if (armourId == null) {
			if (other.armourId != null)
				return false;
		} else if (!armourId.equals(other.armourId))
			return false;
		if (armourType == null) {
			if (other.armourType != null)
				return false;
		} else if (!armourType.equals(other.armourType))
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
		if (stat == null) {
			if (other.stat != null)
				return false;
		} else if (!stat.equals(other.stat))
			return false;
		if (statModifier == null) {
			if (other.statModifier != null)
				return false;
		} else if (!statModifier.equals(other.statModifier))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Armour [armourId=" + armourId + ", armourType=" + armourType + ", defenseModifier=" + defenseModifier
				+ ", stat=" + stat + ", statModifier=" + statModifier + ", description=" + description + "]";
	}
}