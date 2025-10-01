import React from "react";
import "../App.css";

const ProjectCard = ({ title = "Project", description = "Description" }) => {
	return (
		<article className="project-card">
			<h3>{title}</h3>
			<p>{description}</p>
		</article>
	);
};

export default ProjectCard;

