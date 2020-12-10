import React from "react";
import { Card } from "./card.js";
import "../../styles/home.scss";

export const cardContainer = () => {
	return (
		<>
			<div className="d-flex justify-content-between overflow-auto">
				<Card />
				<Card />
				<Card />
			</div>
		</>
	);
};
