import { Box, Center } from "@chakra-ui/react";
import Spotify from "../../components/Spotify";
import HeroBackOffice from "../../components/HeroBackOffice";
import ContenidoListaInvitados from "../../components/ContenidoListaInvitados";
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
					// backgroundImage="linear-gradient(white,  #f7d7ac, #B2936C)"
					backgroundSize={"cover"}
					backgroundPosition={"50% 50%"}
					backgroundImage={"url('../images/fondoInvitaciones.jpg')"}
				>
					<Box>
						<HeroBackOffice
							colorParrafo={"white"}
							color={"white"}
							titulo={"Lista de invitados"}
							parrafo={
								"Esta es la lista de invitados confirmados para el casamiento"
							}
						></HeroBackOffice>
					</Box>
					<ContenidoListaInvitados></ContenidoListaInvitados>
				</Box>
			)}
		</>
	);
}
