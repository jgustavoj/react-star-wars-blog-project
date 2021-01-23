const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			favorites: []
		},
		actions: {
			addFavorite: name => {
				const newStore = getStore();
				let item = newStore.favorites.find(value => value == name); // this method has a conditional that doesnt allow to add multiple items that are the same
				if (item != name) {
					let updatedFavorites = newStore.favorites.concat(name);
					setStore({ favorites: updatedFavorites });
				}
			},
			// addFavorite: name => {
			// 	let newStore = getStore();
			// 	newStore.favorites.push(name);
			//     setStore({ newStore });
			//     //this method allows you to add multiples items that are the same
			// },

			deleteFavorites: index => {
				const newStore = getStore();
				let newFavorites = newStore.favorites.filter((item, ind) => index !== ind);
				setStore({ favorites: newFavorites });
			},
			loadItems: itemNature => {
				fetch(`https://swapi.dev/api/${itemNature}/`, {
					method: "GET"
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}

						return response.json();
					})
					.then(function(responseAsJson) {
						//console.log("responseAsJson", responseAsJson);
						setStore({ [itemNature]: responseAsJson.results });
					});
				// .catch(function(error) {
				// 	//console.log("Looks like there was a problem: \n", error);
				// });
			}
		}
	};
};

export default getState;
