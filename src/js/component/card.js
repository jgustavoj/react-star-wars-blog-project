import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import storm from "../../img/storm.jpg";

import "../../styles/home.scss";

export const Card = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="card ml-3 mr-3" style={{ minWidth: "18rem" }}>
				<img className="card-img-top" src={storm} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.item.name}</h5>

					{"gender" in props.item && <p className="card-text">{`Gender: ${props.item.gender}`}</p>}
					{"hair_color" in props.item && (
						<p className="card-text">{`Hair Color: ${props.item.hair_color}`}</p>
					)}
					{"eye_color" in props.item && <p className="card-text">{`Eye-Color: ${props.item.eye_color}`}</p>}
					{"population" in props.item && (
						<p className="card-text">{`Population: ${props.item.population}`}</p>
					)}
					{"climate" in props.item && <p className="card-text">{`Climate: ${props.item.climate}`}</p>}
					{"terrain" in props.item && <p className="card-text">{`Terrain: ${props.item.terrain}`}</p>}
					{"model" in props.item && <p className="card-text">{`Model: ${props.item.model}`}</p>}
					{"manufacturer" in props.item && (
						<p className="card-text">{`Manufacturer: ${props.item.manufacturer}`}</p>
					)}
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
