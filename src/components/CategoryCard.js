import React from "react";
import "../App.css";

const CategoryCard = ({ label }) => {
	return (
		<div className="category">
			<span className="category-label">{label}</span>
		</div>
	);
};

export default CategoryCard;

