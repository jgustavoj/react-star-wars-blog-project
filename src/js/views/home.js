import React from "react";
import { Card } from "../component/card.js";
import { CardContainer } from "../component/cardContainer.js";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<>
			<div className="text-center container mt-5">
				<CardContainer title={"Characters"} />
				<CardContainer title={"Planets"} />
				<CardContainer title={"Starships"} />
			</div>
		</>
	);
};
