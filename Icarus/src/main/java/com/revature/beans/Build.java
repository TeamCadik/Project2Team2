package com.revature.beans;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

@Entity
@Table(name = "build")
public class Build {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "build")
	@SequenceGenerator(name = "build", sequenceName = "build_seq", allocationSize = 1)
	private Integer buildId;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "headId")
	private Armour head;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "torsoId")
	private Armour torso;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "legsId")
	private Armour legs;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "glovesId")
	private Armour gloves;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "mainHandId")
	private Weapon mainHand;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "offHandId")
	private Weapon offHand;

	private String description;

	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "armourId")
	private Set<Armour> armours = new HashSet<Armour>();
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "weaponId")
	@LazyCollection(LazyCollectionOption.FALSE)
	private Set<Weapon> weapons = new HashSet<Weapon>();
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "buildId")
	private Set<Comment> comments;

	public Build() {
		super();
	}

	public Integer getBuildId() {
		return buildId;
	}

	public void setBuildId(Integer buildId) {
		this.buildId = buildId;
	}

	public Armour getHead() {
		return head;
	}

	public void setHead(Armour head) {
		this.head = head;
	}

	public Armour getTorso() {
		return torso;
	}

	public void setTorso(Armour torso) {
		this.torso = torso;
	}

	public Armour getLegs() {
		return legs;
	}

	public void setLegs(Armour legs) {
		this.legs = legs;
	}

	public Armour getGloves() {
		return gloves;
	}

	public void setGloves(Armour gloves) {
		this.gloves = gloves;
	}

	public Weapon getMainHand() {
		return mainHand;
	}

	public void setMainHand(Weapon mainHand) {
		this.mainHand = mainHand;
	}

	public Weapon getOffHand() {
		return offHand;
	}

	public void setOffHand(Weapon offHand) {
		this.offHand = offHand;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Set<Armour> getArmours() {
		return armours;
	}

	public void setArmours(Set<Armour> armours) {
		this.armours = armours;
	}

	public Set<Weapon> getWeapons() {
		return weapons;
	}

	public void setWeapons(Set<Weapon> weapons) {
		this.weapons = weapons;
	}

	public Set<Comment> getComments() {
		return comments;
	}

	public void setComments(Set<Comment> comments) {
		this.comments = comments;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((armours == null) ? 0 : armours.hashCode());
		result = prime * result + ((buildId == null) ? 0 : buildId.hashCode());
		result = prime * result + ((comments == null) ? 0 : comments.hashCode());
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((gloves == null) ? 0 : gloves.hashCode());
		result = prime * result + ((head == null) ? 0 : head.hashCode());
		result = prime * result + ((legs == null) ? 0 : legs.hashCode());
		result = prime * result + ((mainHand == null) ? 0 : mainHand.hashCode());
		result = prime * result + ((offHand == null) ? 0 : offHand.hashCode());
		result = prime * result + ((torso == null) ? 0 : torso.hashCode());
		result = prime * result + ((weapons == null) ? 0 : weapons.hashCode());
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
		Build other = (Build) obj;
		if (armours == null) {
			if (other.armours != null)
				return false;
		} else if (!armours.equals(other.armours))
			return false;
		if (buildId == null) {
			if (other.buildId != null)
				return false;
		} else if (!buildId.equals(other.buildId))
			return false;
		if (comments == null) {
			if (other.comments != null)
				return false;
		} else if (!comments.equals(other.comments))
			return false;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (gloves == null) {
			if (other.gloves != null)
				return false;
		} else if (!gloves.equals(other.gloves))
			return false;
		if (head == null) {
			if (other.head != null)
				return false;
		} else if (!head.equals(other.head))
			return false;
		if (legs == null) {
			if (other.legs != null)
				return false;
		} else if (!legs.equals(other.legs))
			return false;
		if (mainHand == null) {
			if (other.mainHand != null)
				return false;
		} else if (!mainHand.equals(other.mainHand))
			return false;
		if (offHand == null) {
			if (other.offHand != null)
				return false;
		} else if (!offHand.equals(other.offHand))
			return false;
		if (torso == null) {
			if (other.torso != null)
				return false;
		} else if (!torso.equals(other.torso))
			return false;
		if (weapons == null) {
			if (other.weapons != null)
				return false;
		} else if (!weapons.equals(other.weapons))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Build [buildId=" + buildId + ", description=" + description + ", armours=" + armours + ", weapons="
				+ weapons + ", comments=" + comments + "]";
	}
}
