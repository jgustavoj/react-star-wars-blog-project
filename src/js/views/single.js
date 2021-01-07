import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import storm from "../../img/storm.jpg";

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
						<div className="d-flex justify-content-around">
							<div>
								<strong>
									Birth Year <br />
								</strong>
								{item.birth_year}
							</div>
							<div>
								<strong>
									Eye Color <br />
								</strong>
								{item.eye_color}
							</div>
							<div>
								<strong>
									Gender <br />
								</strong>
								{item.gender}
							</div>
							<div>
								<strong>
									Hair Color <br />
								</strong>
								{item.hair_color}
							</div>
							<div>
								<strong>
									Height <br />
								</strong>
								{item.height}
							</div>
							<div>
								<strong>
									Mass <br />
								</strong>
								{item.mass}
							</div>
							<div>
								<strong>
									Skin Color <br />
								</strong>
								{item.skin_color}
							</div>
						</div>
					</>
				) : params.itemNature == "planets" ? (
					<p>{item.population}</p>
				) : (
					<p>{item.passengers}</p>
				))}
			;
		</div>
	);
};

// Single.propTypes = {
// 	match: PropTypes.object
// };
