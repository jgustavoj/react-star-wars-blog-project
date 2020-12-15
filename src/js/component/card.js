import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import storm from "../../img/storm.jpg";

import "../../styles/home.scss";

export const Card = props => {
	const { store, action } = useContext(Context);
	return (
		<>
			<div className="card ml-3 mr-3" style={{ minWidth: "18rem" }}>
				<img className="card-img-top" src={storm} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.item.name}</h5>

					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the {"card's"}{" "}
						content.
					</p>

					<Link to={`/${props.nature}/${props.item.name}`} className="btn btn-primary">
						Details
					</Link>
					<button
						type="button"
						className=" btn btn-danger ml-5"
						onClick={() => actions.addFavorite(props.item.name)}>
						<i className="far fa-heart " />
					</button>
				</div>
			</div>
		</>
	);
};

Card.propTypes = {
	item: PropTypes.object,
	nature: PropTypes.string
	// index: PropTypes.number
};
