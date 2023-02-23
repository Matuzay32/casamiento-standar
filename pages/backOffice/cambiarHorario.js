import { React, useEffect, useState } from "react";
import { Box, Center } from "@chakra-ui/react";
import HeroBackOffice from "../../components/HeroBackOffice";
import CambiarHorario from "../../components/CambiarHorario";
import swal from "sweetalert";
import { obtenerTokenYRol } from "../../constantes/tokenLogica";

export default function cambiarHorario() {
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
				<Box
					// backgroundImage="linear-gradient(wheat, #FF8C00, black)"
					backgroundSize={"cover"}
					backgroundPosition={"100% 50%"}
					backgroundImage={"url('../images/time.jpg')"}
				>
					<Box>
						<HeroBackOffice
							colorPrimerTitulo={"wheat"}
							colorParrafo={"white"}
							color={"white"}
							titulo={"Cambiar horario y fecha"}
							parrafo={
								"Esta sección  es para poder cambiar la fecha y la hora del casamiento"
							}
						></HeroBackOffice>
					</Box>
					<CambiarHorario></CambiarHorario>
				</Box>
			)}
		</>
	);
}
