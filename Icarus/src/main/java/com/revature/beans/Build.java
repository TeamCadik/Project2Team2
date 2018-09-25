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
@Table(name="build")
public class Build {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="build")
	@SequenceGenerator(name="build", sequenceName="build_seq", allocationSize=1)
	private Integer buildId;
	private Armour head;
	private Armour torso;
	private Armour legs;
	private Armour gloves;
	private Armour mainHand;
	private Armour offHand;
	@OneToMany(fetch=FetchType.EAGER, mappedBy="build")
	private Set<String> comments;
	
	public Build() {
		super();
	}

	public Set<String> getComments() {
		return comments;
	}

	public void setComments(Set<String> comments) {
		this.comments = comments;
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

	public Armour getMainHand() {
		return mainHand;
	}

	public void setMainHand(Armour mainHand) {
		this.mainHand = mainHand;
	}

	public Armour getOffHand() {
		return offHand;
	}

	public void setOffHand(Armour offHand) {
		this.offHand = offHand;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((buildId == null) ? 0 : buildId.hashCode());
		result = prime * result + ((comments == null) ? 0 : comments.hashCode());
		result = prime * result + ((gloves == null) ? 0 : gloves.hashCode());
		result = prime * result + ((head == null) ? 0 : head.hashCode());
		result = prime * result + ((legs == null) ? 0 : legs.hashCode());
		result = prime * result + ((mainHand == null) ? 0 : mainHand.hashCode());
		result = prime * result + ((offHand == null) ? 0 : offHand.hashCode());
		result = prime * result + ((torso == null) ? 0 : torso.hashCode());
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
		return true;
	}

	@Override
	public String toString() {
		return "Build [buildId=" + buildId + ", head=" + head + ", torso=" + torso + ", legs=" + legs + ", gloves="
				+ gloves + ", mainHand=" + mainHand + ", offHand=" + offHand + ", comments=" + comments + "]";
	}
}
