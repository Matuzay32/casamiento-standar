import React, { useState, useRef, useEffect } from "react";
import {
	Box,
	Text,
	Center,
	useColorModeValue,
	Image,
	Heading,
	Icon,
	Stack,
} from "@chakra-ui/react";
import PanelUsersBackOffice from "./PanelUsersBackOffice";
import { fechasHoras } from "../constantes/fecha";
import { obtenerTokenYRol } from "../constantes/tokenLogica";

export default function Reloj() {
	const [timerDays, setTimerDays] = useState("00");
	const [timerHours, setTimerHours] = useState("00");
	const [timerMinutes, setTimerMinutes] = useState("00");
	const [timerSeconds, setTimerSeconds] = useState("00");
	const [fecha, setFecha] = useState();
	const interval = useRef();
	const [tokenRol, setTokenRol] = useState();

	useEffect(() => {
		obtenerTokenYRol().then((x) => {
			setTokenRol(x);
		});
		return () => {};
	}, []);

	//"2022-11-11"
	const startTimer = () => {
		if (fecha) {
			////console.log(fecha, "probando");
			const countDownDate = new Date(fecha).getTime();
			interval = setInterval(() => {
				const now = new Date().getTime();
				const distance = countDownDate - now;
				const days = Math.floor(
					distance / (1000 * 60 * 60 * 24)
				);
				const hours = Math.floor(
					(distance % (1000 * 60 * 60 * 24)) /
						(1000 * 60 * 60)
				);
				const minutes = Math.floor(
					(distance % (1000 * 60 * 60)) / (1000 * 60)
				);
				const seconds = Math.floor(
					(distance % (1000 * 60)) / 1000
				);

				if (distance < 0) {
					clearInterval(interval.current);
				} else {
					setTimerDays(days);
					setTimerHours(hours);
					setTimerMinutes(minutes);
					setTimerSeconds(seconds);
				}
			}, 1000);
		}
	};

	useEffect(() => {
		startTimer();
		// fechasHoras().then(({ fecha }) => setFecha(fecha));
		const p = { fecha: "2024-02-14 20:00" };

		setFecha(p.fecha);

		return () => {
			clearInterval(interval.current);
		};
	}, [fecha]);

	return (
		<Box
			w={"100%"}
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
			flexFlow={"column"}>
			{tokenRol &&
				tokenRol.rol === "ADMIN" &&
				tokenRol.token && <PanelUsersBackOffice />}

			<Heading
				fontSize={"50px"}
				fontWeight={500}
				color={100}
				fontFamily={"body"}
				width={"100%"}
				mb={"10px"}>
				Faltan
			</Heading>
			<Text
				my={5}
				fontWeight={500}
				fontSize={"large"}
				color={"gray.300"}>
				{fecha}
			</Text>

			<Box
				display={"flex"}
				w={"100%"}
				h={"10rem"}
				justifyContent={"space-around"}
				alignItems={"center"}
				bg={useColorModeValue("white", "gray.800")}>
				<Box
					display={"flex"}
					justifyContent={"center"}
					flexFlow={"column"}
					alignItems={"center"}
					height={"90px"}
					p={3}
					borderRightWidth={{ base: "1px", md: "1px" }}
					borderLeftWidth={{ base: "1px", md: "1px" }}>
					<Heading
						fontSize={{
							base: "sm",
							lg: "4xl",
							sm: "lg",
						}}
						fontWeight={500}
						color={100}
						fontFamily={"body"}
						width={"100%"}
						mb={"1rem"}>
						{timerDays}
					</Heading>
					<Text
						color={"gray.500"}
						fontWeight={500}
						width={"100%"}
						fontSize={{
							base: "sm",
							lg: "lg",
							sm: "sm",
						}}
						mb={"1rem"}>
						Dias
					</Text>
				</Box>

				<Box
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					flexFlow={"column"}
					height={"90px"}
					p={3}
					borderRightWidth={{ base: "1px", md: "1px" }}
					borderLeftWidth={{ base: "1px", md: "1px" }}>
					<Heading
						fontSize={{
							base: "sm",
							lg: "4xl",
							sm: "lg",
						}}
						fontWeight={500}
						color={100}
						fontFamily={"body"}
						width={"100%"}
						mb={"1rem"}>
						{timerHours}
					</Heading>
					<Text
						fontSize={{
							base: "sm",
							lg: "lg",
							sm: "lg",
						}}
						color={"gray.500"}
						fontWeight={500}
						width={"100%"}
						mb={"1rem"}>
						Horas
					</Text>
				</Box>
				<Box
					display={"flex"}
					justifyContent={"center"}
					flexFlow={"column"}
					alignItems={"center"}
					height={"90px"}
					p={3}
					borderRightWidth={{ base: "1px", md: "1px" }}
					borderLeftWidth={{ base: "1px", md: "1px" }}>
					<Heading
						fontSize={{
							base: "sm",
							lg: "4xl",
							sm: "lg",
						}}
						fontWeight={500}
						color={100}
						fontFamily={"body"}
						width={"100%"}
						mb={"1rem"}>
						{timerMinutes}
					</Heading>
					<Text
						fontSize={{
							base: "sm",
							lg: "lg",
							sm: "lg",
						}}
						color={"gray.500"}
						fontWeight={500}
						width={"100%"}
						mb={"1rem"}>
						Minutos
					</Text>
				</Box>
				<Box
					display={"flex"}
					justifyContent={"center"}
					flexFlow={"column"}
					alignItems={"center"}
					height={"90px"}
					p={3}
					borderRightWidth={{ base: "1px", md: "1px" }}
					borderLeftWidth={{ base: "1px", md: "1px" }}>
					<Heading
						fontSize={{
							base: "sm",
							lg: "4xl",
							sm: "lg",
						}}
						fontWeight={500}
						color={100}
						fontFamily={"body"}
						width={"100%"}
						mb={"1rem"}>
						{timerSeconds}
					</Heading>
					<Text
						fontSize={{
							base: "sm",
							lg: "lg",
							sm: "lg",
						}}
						color={"gray.500"}
						fontWeight={500}
						width={"100%"}
						mb={"1rem"}>
						Segundos
					</Text>
				</Box>
			</Box>
		</Box>
	);
}
