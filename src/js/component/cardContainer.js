import React from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Card } from "./card.js";
import "../../styles/home.scss";

export const CardContainer = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="text-primary">
				<h2>{props.title}</h2>
			</div>
			<div className="d-flex justify-content-between overflow-auto">
				{store.characters.map(item => {
					<Card character={item} />;
				})}
			</div>
		</>
	);
};

CardContainer.propTypes = {
	title: PropTypes.string
};
