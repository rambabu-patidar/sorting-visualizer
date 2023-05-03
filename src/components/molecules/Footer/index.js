import React from "react";
import "./style.css";

const Footer = (props) => {
	return (
		<footer className="Footer">
			<section>
				Designed and built with <span className="Footer__Heart">&hearts;</span>{" "}
				by{" "}
				<a
					href="https://example.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="Footer__Link"
				>
					Rambabu Patidar, Priyanshu Sahu, Saurabh Singh, Eshika Khatarkar
				</a>
			</section>

			<section className="Footer__Items">
				<a
					href="htpp://www.example.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="Footer__Link"
				>
					Demo
				</a>
				<a
					href="http://www.example.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="Footer__Link"
				>
					Code
				</a>
			</section>
		</footer>
	);
};

export default Footer;
