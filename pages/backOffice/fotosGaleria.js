import { Box, Center } from "@chakra-ui/react";
import HeroBackOffice from "../../components/HeroBackOffice";
import GaleriaFotosCargar from "../../components/GaleriaFotosCargar";
import { React, useEffect, useState } from "react";
import swal from "sweetalert";
import { obtenerTokenYRol } from "../../constantes/tokenLogica";

export default function fotosGaleria() {
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
					backgroundPosition={"10% 50%"}
					backgroundImage={"url('../images/fondoGalerias.jpg')"}
				>
					<Box>
						<HeroBackOffice
							colorPrimerTitulo={"wheat"}
							colorParrafo={"white"}
							color={"white"}
							titulo={"Galeria de fotos"}
							parrafo={
								"Esta sección  es para poder cambiar las imagenes de la galeria"
							}
						></HeroBackOffice>
					</Box>
					<GaleriaFotosCargar></GaleriaFotosCargar>
				</Box>
			)}
		</>
	);
}
