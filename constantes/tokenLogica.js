//OBTIENE EL TOKEN DEL SESSION STORAGE y el rol
export const obtenerTokenYRol = async () => {
	const  miToken = await sessionStorage.getItem("token");

	if (miToken) {
		return await JSON.parse(miToken);
	}
	console.log(miToken, "este es mi token desde constantes");
};
