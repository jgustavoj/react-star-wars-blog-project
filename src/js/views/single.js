import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import ship from "../../img/ship.jpg";

export const Single = () => {
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

	//this scenario works because names are unique and no ID available to pull from

	return (
		<div className="jumbotron">
			<div className="d-flex justify-content-start">
				<img className="card-img-top" src={ship} style={{ width: 600, height: 450 }} alt="Card image cap" />

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
					<div className="d-flex justify-content-around" id="bold">
						<div>
							<p>
								Birth Year <br />
							</p>
							{item.birth_year}
						</div>
						<div>
							<p>
								Eye Color <br />
							</p>
							{item.eye_color}
						</div>
						<div>
							<p>
								Gender <br />
							</p>
							{item.gender}
						</div>
						<div>
							<p>
								Hair Color <br />
							</p>
							{item.hair_color}
						</div>
						<div>
							<p>
								Height <br />
							</p>
							{item.height}
						</div>
						<div>
							<p>
								Mass <br />
							</p>
							{item.mass}
						</div>
						<div>
							<p>
								Skin Color <br />
							</p>
							{item.skin_color}
						</div>
					</div>
				) : params.itemNature == "planets" ? (
					<div className="d-flex justify-content-around" id="bold">
						<div>
							<p>Climate</p>
							{item.climate}
						</div>
						<div>
							<p>Diameter</p>
							{item.diameter}
						</div>
						<div>
							<p>Gravity</p>
							{item.gravity}
						</div>
						<div>
							<p>Diameter</p>
							{item.diameter}
						</div>
						<div>
							<p>Orbital Period</p>
							{item.orbital_period}
						</div>
						<div>
							<p>Population</p>
							{item.population}
						</div>
						<div>
							<p>Rotation Period</p>
							{item.rotation_period}
						</div>
						<div>
							<p>Surface Water</p>
							{item.surface_water}
						</div>
						<div>
							<p>Terrain</p>
							{item.terrain}
						</div>
					</div>
				) : (
					<div className="d-flex justify-content-around" id="bold">
						<div>
							<p>MGTL</p>
							{item.MGLT}
						</div>
						<div>
							<p> Cargo Capacity</p>
							{item.cargo_capacity}
						</div>
						<div>
							<p>Consumables</p>
							{item.consumables}
						</div>
						<div>
							<p> Cost in Credits</p>
							{item.cost_in_credits}
						</div>
						<div>
							<p>Crew</p>
							{item.crew}
						</div>
						<div>
							<p>Hyperdrive Rating</p>
							{item.hyperdrive_rating}
						</div>
						<div>
							<p>Length</p>
							{item.length}
						</div>
						<div>
							<p>Manufacturer</p>
							{item.manufacturer}
						</div>
						<div>
							<p>Max Atmosphering Speed</p>
							{item.max_atmosphering_speed}
						</div>
						<div>
							<p> Model</p>
							{item.model}
						</div>
						<div>
							<p>Passengers</p>
							{item.passengers}
						</div>
					</div>
				))}
		</div>
	);
};
