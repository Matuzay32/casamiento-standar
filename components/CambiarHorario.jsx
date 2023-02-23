import {
	useColorModeValue,
	Box,
	Flex,
	Stack,
	Heading,
	Text,
	Container,
	Input,
	Button,
	SimpleGrid,
	Avatar,
	AvatarGroup,
	useBreakpointValue,
	IconProps,
	Icon,
	FormLabel,
	Image,
	Textarea,
	Select,
	useDisclosure,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	ModalCloseButton,
	ModalOverlay,
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { FiCamera, FiSave } from "react-icons/fi";
import { FaCarSide } from "react-icons/fa";
import {
	FaInstagram,
	FaTwitter,
	FaYoutube,
	FaShoppingCart,
} from "react-icons/fa";
import { useRouter } from "next/router";
import { PillPity } from "pill-pity";
import { cargaFechaHora } from "../constantes/fecha";
import swal from "sweetalert";

export default function CambiarHorario() {
	const router = useRouter();
	const { push } = router;
	const [modalContent, setModalContent] = useState("");
	const patterFill = useColorModeValue("white", "brand.300");

	const refForm = useRef();

	const fetchPost = async (fechaHora) => {
		setModalContent("");
		const { current: form } = refForm;
		const formData = new FormData(form);
		console.log(fechaHora, "esta es la fecha y la hora");

		cargaFechaHora(fechaHora);
	};

	const handleSumbit = (event) => {
		const { current: form } = refForm;
		// event.preventDefault()
		const formData = new FormData(form);
		const fecha = formData.get("fecha");
		const hora = formData.get("hora");

		if (formData && fecha && hora) {
			const fechaHora = {
				fecha,
				hora,
			};

			fetchPost(fechaHora);
			swal({
				title: "INFO",
				text: "Fecha y hora cambiadas correctamente",
				icon: "success",
			});
			push("/");
		} else {
			swal({
				title: "INFO",
				text: "Tiene que ingresar tanto la fecha como la hora",
				icon: "warning",
			});
		}
	};

	return (
		<PillPity
			position={"relative"}
			w={"full"}
			h={"auto"}
			// backgroundSize={"cover"}
			// backgroundPosition={"25% 50%"}
			// backgroundImage={
			// 	"url(https://images.unsplash.com/photo-1535185384036-28bbc8035f28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80)"
			// }
			pattern={"architect"}
			patternFill={patterFill}
			patOpacity={0}
			bgColor={"#f0f8ff0"}
			as={Box}
		>
			<Container
				as={SimpleGrid}
				maxW={"7xl"}
				columns={{ base: 1, md: 2 }}
				spacing={{ base: 10, lg: 32 }}
				py={{ base: 10, sm: 20, lg: 32 }}
			>
				<Stack spacing={{ base: 10, md: 20 }}>
					<Heading
						color={1900}
						lineHeight={1.1}
						fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
					></Heading>

					<Stack direction={"row"} spacing={4} align={"center"}></Stack>
				</Stack>
				<Stack
					bg={"gray.50"}
					rounded={"xl"}
					p={{ base: 4, sm: 6, md: 8 }}
					spacing={{ base: 8 }}
					maxW={{ lg: "lg" }}
				>
					<Stack spacing={4}>
						<Heading
							fontSize={"4xl"}
							fontWeight={500}
							color={100}
							fontFamily={"body"}
							width={"100%"}
							mb={"1rem"}
							borderBottomWidth={{ base: "2px", md: "2px" }}
							lineHeight={1.1}
							// fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
						>
							Cambiar hora fecha casamiento
						</Heading>
						<Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
							Este formulario sirve para cambiar la fecha y la hora del
							casamiento
						</Text>
					</Stack>
					<Box as={"form"} mt={10} ref={refForm}>
						<Stack spacing={4}>
							{/* <form ref={refForm}> */}

							<FormLabel
								fontSize={"md"}
								fontWeight={500}
								color={100}
								fontFamily={"body"}
								width={"100%"}
								mb={"1rem"}
								lineHeight={1.1}
							>
								Cambie la fecha
							</FormLabel>

							<Input
								required
								type={"date"}
								name="fecha"
								placeholder="fecha"
								bg={"gray.100"}
								border={0}
								color={"gray.500"}
								_placeholder={{
									color: "gray.500",
								}}
							/>

							<FormLabel
								fontSize={"md"}
								fontWeight={500}
								color={100}
								fontFamily={"body"}
								width={"100%"}
								mb={"1rem"}
								lineHeight={1.1}
							>
								Cambie el horario
							</FormLabel>

							<Input
								required
								type={"time"}
								name="hora"
								placeholder="Hora"
								bg={"gray.100"}
								border={0}
								color={"gray.500"}
								_placeholder={{
									color: "gray.500",
								}}
							/>

							{/* </form> */}

							<Button
								onClick={(e) => handleSumbit(e)}
								w={"full"}
								mt={8}
								bg={useColorModeValue("#151f21", "gray.900")}
								color={"white"}
								rounded={"2xl"}
								_hover={{
									transform: "translateY(-2px)",
									boxShadow: "lg",
									backgroundColor: "#d5b063",
								}}
							>
								Cargar
							</Button>
						</Stack>
					</Box>
				</Stack>
			</Container>
		</PillPity>
	);
}
