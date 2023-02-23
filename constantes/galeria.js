import { obtenerTokenYRol } from "./tokenLogica";

export const postAllPhotos = async (data) => {
	const res = await fetch("http://localhost:4000/galeria/files", {
		method: "POST",
		mode: "cors",
		body: data,
	});
	return await res.json();
};

export const guardarNombreImagenes = async (datos) => {
	const respuesta = await obtenerTokenYRol();
	const res = await fetch(`http://localhost:4000/galeria`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			token: respuesta?.token,
		},
		body: JSON.stringify(datos),
	});
	const data = res.json();

	return data;
};

export const muestraTodasLasFotosGaleria = async () => {
	const res = await fetch("http://localhost:4000/galeria");
	return res.json();
};
