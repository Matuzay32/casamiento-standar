import { React, useEffect, useState } from "react";
import { obtenerTokenYRol } from "../constantes/tokenLogica";
import swal from "sweetalert";
import { Box, Text } from "@chakra-ui/react";
import OpcionesDelBackOffice from "../components/OpcionesDelBackOffice";
import HeroBackOffice from "../components/HeroBackOffice";

export default function backOffice() {
	const [tokenRol, setTokenRol] = useState();
	useEffect(() => {
		obtenerTokenYRol().then((x) => {
			setTokenRol(x);
			console.log(x);
			if (!x) {
				swal({
					title: "Error",
					text: "Tiene que ser administrador para poder acceder",
					icon: "error",
				});
			}
			if (x?.rol === "USER") {
				swal({
					title: "Error",
					text: "Tiene que ser administrador para poder acceder",
					icon: "error",
				});
			}
		});
		return () => {};
	}, []);

	return (
		<>
			{tokenRol && tokenRol.rol === "ADMIN" && tokenRol.token && (
				<Box>
					<HeroBackOffice
						color={200}
						titulo={"Pagina central"}
						parrafo={
							"Esta es la página central del back Office que sirve para ver la lista de invitados, cambiar la foto central, las fotos de la galería como asi también ver las sugerencias musicales"
						}
					></HeroBackOffice>
				</Box>
			)}
		</>
	);
}
