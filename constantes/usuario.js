//SIRVE PARA CREAR UN USUARIO
export const crearUsuario = async (datos) => {
	const res = await fetch(`http://localhost:4000/users`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(datos),
	});
	return await res.json();
};
//SIRVE PARA INGRESAR UN USUARIO
export const ingresarUsuario = async (datos) => {
	const res = await fetch(`http://localhost:4000/users/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(datos),
	});
	return await res.json();
};
//SIRVE PARA ACTUALIZAR UN USUARIO
export const actualizarUsuario = async (datos, id) => {
	const res = await fetch(`http://localhost:4000/users/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(datos),
	});
	return await res.json();
};
//SIRVE PARA BORRAR UN USUARIO
export const borrarUsuario = async (id) => {
	const res = await fetch(`http://localhost:4000/users/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(datos),
	});
	return await res.json();
};
