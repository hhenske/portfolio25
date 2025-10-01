import React from "react";
import "../App.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-inner">© {new Date().getFullYear()} Holly Henske</div>
		</footer>
	);
};

export default Footer;

