//MUESTRA LAS IMAGENES QUE ESTAN CARGADAS EN LA DB
import { obtenerTokenYRol } from "./tokenLogica";
export const obtenerFotoCentralDesdeLaDb = async () => {
	const res = await fetch("http://localhost:4000/fotoCentral");
	return await res.json();
};

//GUARDA EL NOMBRE LA IMAGEN EN LA DB DE FOTOSCENTRALES
export const subirFotoCentralDb = async (datos) => {
	const respuesta = await obtenerTokenYRol();

	const res = await fetch(`http://localhost:4000/fotoCentral`, {
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

//GUARDA LA IMAGEN CENTRAL EN LA GALERIA DE FOTOS
export const subirFotoCentral = async (data) => {
	const res = await fetch("http://localhost:4000/fotoCentral/file", {
		method: "POST",
		mode: "cors",
		body: data,
	});
	return await res.json();
};
//CON ESTO SE MODIFICA LA POSICION DE LA FOTO CENTRAL EN EL EJE Y
export const posicionFotoCentralEnY = async () => {
	const res = await fetch(`http://localhost:4000/fotoCentral`);
	const datos = await res.json();
	return datos.posicionFotoCentralEnY;
};

export const fotoPorDefecto = "images/fotoCentral.jpeg";
