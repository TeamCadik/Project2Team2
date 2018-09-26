package com.revature.beans;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MapKey;
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
	
	@OneToMany(cascade = CascadeType.ALL, fetch=FetchType.LAZY, mappedBy="armourId")
	@MapKey(name = "armourType")
	Map<String, Armour> armours = new HashMap<String, Armour>();
	@OneToMany(cascade = CascadeType.ALL, fetch=FetchType.LAZY, mappedBy="weaponId")
	@MapKey(name = "weaponType")
	Map<String, Weapon> weapons = new HashMap<String, Weapon>();
	
	@OneToMany(fetch=FetchType.EAGER, mappedBy="buildId")
	private Set<Comment> comments;
	
	public Build() {
		super();
	}

	public Set<Comment> getComments() {
		return comments;
	}

	public void setComments(Set<Comment> comments) {
		this.comments = comments;
	}

	public Integer getBuildId() {
		return buildId;
	}

	public void setBuildId(Integer buildId) {
		this.buildId = buildId;
	}



	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((armours == null) ? 0 : armours.hashCode());
		result = prime * result + ((buildId == null) ? 0 : buildId.hashCode());
		result = prime * result + ((comments == null) ? 0 : comments.hashCode());
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
		if (weapons == null) {
			if (other.weapons != null)
				return false;
		} else if (!weapons.equals(other.weapons))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Build [buildId=" + buildId + ", armours=" + armours + ", weapons=" + weapons + ", comments=" + comments
				+ "]";
	}
}
