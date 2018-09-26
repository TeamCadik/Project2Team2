package com.revature.beans;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Comments")
public class Comment {
	@Id
	private Integer buildId;
	private String commentStr;
	public Integer getBuildId() {
		return buildId;
	}
	public void setBuildId(Integer buildId) {
		this.buildId = buildId;
	}
	public String getCommentStr() {
		return commentStr;
	}
	public void setCommentStr(String commentStr) {
		this.commentStr = commentStr;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((buildId == null) ? 0 : buildId.hashCode());
		result = prime * result + ((commentStr == null) ? 0 : commentStr.hashCode());
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
		Comment other = (Comment) obj;
		if (buildId == null) {
			if (other.buildId != null)
				return false;
		} else if (!buildId.equals(other.buildId))
			return false;
		if (commentStr == null) {
			if (other.commentStr != null)
				return false;
		} else if (!commentStr.equals(other.commentStr))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Comment [buildId=" + buildId + ", commentStr=" + commentStr + "]";
	}

}
