import React from "react";
import PropTypes from "prop-types";
import { Card } from "./card.js";
import "../../styles/home.scss";

export const CardContainer = props => {
	return (
		<>
			<div className="text-primary">
				<h2>{props.title}</h2>
			</div>
			<div className="d-flex justify-content-between overflow-auto">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</>
	);
};

CardContainer.propTypes = {
	title: PropTypes.string
};
