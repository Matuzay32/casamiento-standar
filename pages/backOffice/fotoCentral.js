import { Box, Center } from "@chakra-ui/react";
import HeroBackOffice from "../../components/HeroBackOffice";
import CambiarFotoCentral from "../../components/CambiarFotoCentral";
import { React, useEffect, useState } from "react";
import swal from "sweetalert";
import { obtenerTokenYRol } from "../../constantes/tokenLogica";

export default function fotoCentral() {
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
					backgroundImage={"url('../images/fondoGalerias.jpg')"}
				>
					<Box>
						<HeroBackOffice
							colorPrimerTitulo={"wheat"}
							colorParrafo={"white"}
							color={"white"}
							titulo={"Cambiar foto central"}
							parrafo={
								"Esta sección  es para poder cambiar la imagen principal"
							}
						></HeroBackOffice>
					</Box>
					<CambiarFotoCentral></CambiarFotoCentral>
				</Box>
			)}
		</>
	);
}
