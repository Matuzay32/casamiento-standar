//Este metodo trae todas las canciones
export const obteniendoTodosLosLinksDeSpotify = async () => {
	const res = await fetch("http://localhost:4000/spotify");
	const datos = await res.json();
	return datos;
};

//Metodo crea las canciones
export const creandoLinkSpotify = async (datos) => {
	const res = await fetch("http://localhost:4000/spotify", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(datos),
	});
	const data = res.json();

	return data;
};
