import { Box, Center } from "@chakra-ui/react";
import Spotify from "../../components/Spotify";
import ContenidoListaMusica from "../../components/ContenidoListaMusica";
import HeroBackOffice from "../../components/HeroBackOffice";
import { React, useEffect, useState } from "react";
import swal from "sweetalert";
import { obtenerTokenYRol } from "../../constantes/tokenLogica";

export default function listaMusica() {
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
					backgroundSize={"cover"}
					backgroundPosition={"50% 50%"}
					backgroundImage={"url('../images/fondoSpotify.jpg')"}
					// backgroundImage="linear-gradient(white,  teal, black)"
				>
					<Box>
						<HeroBackOffice
							colorParrafo={"white"}
							color={"white"}
							titulo={"Lista de canciones"}
							parrafo={
								"Estas son las sugerencias musicales que ponen los invitados para el casamiento, ideal para arma la playlist perfecta"
							}
						></HeroBackOffice>
					</Box>
					<ContenidoListaMusica></ContenidoListaMusica>
				</Box>
			)}
		</>
	);
}
