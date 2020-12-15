import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Card } from "./card.js";
import "../../styles/home.scss";

//card container holds each Card component - planets, world, startships
export const CardContainer = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadItems(props.title);
	}, []);
	return (
		<>
			<div className="text-primary">
				<h2>{`${props.title.charAt(0).toUpperCase()}${props.title.slice(1)}`}</h2>
			</div>
			<div className="d-flex justify-content-between overflow-auto">
				{store[props.title] &&
					store[props.title].map(item => <Card item={item} key={item.url} nature={props.title} />)}

				{/* {store.characters.map(item => {
					<Card character={item} />;
				})} */}
			</div>
		</>
	);
};

CardContainer.propTypes = {
	title: PropTypes.string
};
