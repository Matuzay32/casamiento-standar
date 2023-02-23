import React, { useEffect } from "react";
import swal from "sweetalert";
import Router from "next/router";

export default function cerrar() {
	const { push } = Router;
	useEffect(() => {
		const closeSession = () => {
			swal({
				title: "Estas seguro?",
				text: "¿Estas seguro que quieres salir de la cuenta? ",
				icon: "warning",
				buttons: true,
				dangerMode: true,
			}).then((x) => {
				if (x) {
					swal("La cuenta se cerrado correctamente", {
						icon: "success",
					});
					sessionStorage.clear();
					push("/");
				} else {
					swal("Usted sigue en la cuenta", {
						icon: "success",
					});
					push("/");
				}
			});
		};
		closeSession();
		return () => {};
	}, []);
	return (
		<>
			<div></div>
		</>
	);
}
