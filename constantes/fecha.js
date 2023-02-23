//Get de fecha
import { obtenerTokenYRol } from "./tokenLogica";

export const fechasHoras = async () =>
	(await fetch("http://localhost:4000/fecha")).json();

export const cargaFechaHora = async (data) => {
	const respuesta = await obtenerTokenYRol();
	return await fetch("http://localhost:4000/fecha", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			token: respuesta?.token,
		},
	});
};
