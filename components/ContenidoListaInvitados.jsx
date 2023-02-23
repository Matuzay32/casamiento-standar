import {
	Avatar,
	Text,
	Box,
	chakra,
	Container,
	Flex,
	Icon,
	SimpleGrid,
	HStack,
	useColorModeValue,
	Image,
	Heading,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import InvitadosComponente from "./InvitadosComponente";
import Spotify from "./Spotify";
import PruebaInvitado from "./InvitadosComponente";
import { muestraTodosLosInvitados } from "../constantes/invitado";

export default function ContenidoListaInvitados() {
	const [invitadoContenido, setInvitadoContenido] = useState([
		{ nombre: "Ezequiel", apellido: "rey", estado: "confirmado", cantidad: 2 },
		{ nombre: "Ana", apellido: "Radal", estado: "confirmado", cantidad: 3 },
		{ nombre: "Pablo", apellido: "pucheti", estado: "confirmado", cantidad: 5 },
		{ nombre: "Juan", apellido: "anosini", estado: "confirmado", cantidad: 7 },
	]);

	const cantidadTotal = () => {
		if (
			invitadoContenido ||
			invitadoContenido != undefined ||
			invitadoContenido != null
		) {
			return invitadoContenido.map((x) => x.cantidad).reduce((x, y) => x + y);
		} else {
			return "Aun no hay invitados confirmados";
		}
	};

	useEffect(() => {
		muestraTodosLosInvitados().then((x) => {
			const resultado = x.length <= 0 ? null : x;
			setInvitadoContenido(resultado);
		});

		return () => {};
	}, []);
	return (
		<>
			<Flex
				pos={"relative"}
				textAlign={"center"}
				pt={10}
				justifyContent={"center"}
				direction={"column"}
				width={"full"}
			>
				<Heading
					fontWeight={600}
					fontSize={{ base: "4xl", sm: "4xl", md: "6xl" }}
					lineHeight={"110%"}
					color={"white"}
					textShadow={"-5px -2px 0px #ffecec7a"}
				>
					Lista
				</Heading>
				<Box
					boxShadow={"dark-lg"}
					height={"auto"}
					width={{ base: "full", sm: "lg", lg: "xl" }}
					margin={"auto"}
				></Box>

				{cantidadTotal() && (
					<HStack mt={10} p={3} justifyContent={"center"} w={"full"}>
						<Box
							boxShadow={"dark-lg"}
							rounded={"xl"}
							p={6}
							h="auto"
							maxW={"270px"}
							bg={"white"}
						>
							<chakra.h2
								borderBottomWidth={"2px"}
								color="100"
								_dark={{
									color: "white",
								}}
								fontSize={{
									base: "2xl",
									md: "3xl",
								}}
								mt={{
									base: 2,
									md: 0,
								}}
								fontWeight="bold"
							>
								Invitados
							</chakra.h2>
							<chakra.p
								fontSize={"xl"}
								mt={2}
								color="gray.400"
								_dark={{
									color: "gray.200",
								}}
							>
								{cantidadTotal()}
							</chakra.p>
						</Box>
					</HStack>
				)}
				{invitadoContenido && (
					<Box
						display={"flex"}
						justifyContent={"space-evenly"}
						flexFlow={{ base: "column", sm: "wrap", lg: "wrap" }}
						mt={10}
					>
						{invitadoContenido?.map((invitadoInfo, index) => {
							return (
								<InvitadosComponente
									key={`invitado${index}`}
									{...invitadoInfo}
									index={index}
								/>
							);
						})}
					</Box>
				)}
			</Flex>
		</>
	);
}
