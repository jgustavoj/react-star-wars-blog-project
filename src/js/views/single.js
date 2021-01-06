import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import storm from "../../img/storm.jpg";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [item, setItem] = useState(null);
	useEffect(() => {
		for (let object of store[params.itemNature]) {
			if (object.name == params.name) {
				setItem(object);
				break;
			}
		}
	}, [store, params]);

	//this works because names are unique and no ID available

	return (
		<div className="jumbotron">
			<div className="d-flex justify-content-start">
				<img className="card-img-top" src={storm} style={{ width: 600, height: 450 }} alt="Card image cap" />

				<div className="d-flex flex-column ml-5">
					<h2 className="display-4">{params.name}</h2>
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>

			<hr className="my-4" />

			{item != null &&
				(params.itemNature == "people" ? (
					<>
						<p>
							Eye Color <br />
							{item.eye_color}
						</p>
					</>
				) : params.itemNature == "planets" ? (
					<p>{item.population}</p>
				) : (
					<p>{item.passengers}</p>
				))}

			<Link to="/">
				<span className="btn btn-primary btn-lg float-right" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
