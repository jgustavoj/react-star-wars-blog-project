import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Card = props => {
	return (
		<>
			<div className="card ml-3 mr-3" style={{ minWidth: "18rem" }}>
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.item.name}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the {"card's"}{" "}
						content.
					</p>

					<Link to={`/${props.nature}/${props.item.name}`} className="btn btn-primary">
						Go somewhere
					</Link>
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
