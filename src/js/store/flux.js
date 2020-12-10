const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: []
		},
		actions: {
			loadCharacters: () => {
				fetch("https://swapi.dev/api/people/", {
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
						setStore({ characters: responseAsJson.results });
					});
				// .catch(function(error) {
				// 	//console.log("Looks like there was a problem: \n", error);
				// });
			}
		}
	};
};

export default getState;
