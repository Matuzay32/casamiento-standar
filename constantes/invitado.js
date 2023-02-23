// Muestra todos los invitados
export const muestraTodosLosInvitados = async () => {
	const res = await fetch("http://localhost:4000/invitado");
	const datos = await res.json();
	return datos;
};
//Crea el invitado
export const creandoInvitado = async (datos) => {
	const res = await fetch("http://localhost:4000/invitado", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(datos),
	});
	const data = res.json();

	return data;
};
