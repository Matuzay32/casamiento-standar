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
import { creandoInvitado } from "../constantes/invitado";
import swal from "sweetalert";

export default function ConfirmarAsistenciaComponent() {
	const router = useRouter();
	// console.log(router);
	const { push } = router;
	const [modalContent, setModalContent] = useState("");
	const patterFill = useColorModeValue("white", "brand.300");

	const refForm = useRef();

	const fetchPost = async (persona) => {
		setModalContent("");
		const { current: form } = refForm;
		//creando el invitado
		creandoInvitado(persona);
	};

	const handleSumbit = (event) => {
		const { current: form } = refForm;
		// event.preventDefault()
		const formData = new FormData(form);
		const nombre = formData.get("nombre");
		const cantidad = formData.get("cantidad");
		const apellido = formData.get("apellido");

		if (formData && nombre && apellido) {
			const persona = {
				nombre,
				apellido,
				cantidad,
			};

			fetchPost(persona);
			swal({
				title: "INFO",
				text: "Gracias por confirmar asistencia",
				icon: "success",
			});
			push("/");
		} else {
			swal({
				title: "INFO",
				text: "Tiene que ingresar todos los datos para confirmar la asistencia",
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
			// 	"url(https://images.unsplash.com/photo-1536599424071-0b215a388ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)"
			// }
			pattern={"architect"}
			patternFill={patterFill}
			patOpacity={0.5}
			bgColor={300}
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
							Confirmar Asistencia
						</Heading>
						<Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
							Te pedimos que por favor confirmes la asistencia, esto nos va a
							ayudar a organizar mejor tanto la fiesta como la ceremonia
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
								Cantidad
							</FormLabel>
							<Input
								type={"number"}
								required
								placeholder="Cantidad de invitados"
								name="cantidad"
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
								Nombre
							</FormLabel>
							<Input
								required
								placeholder="Nombre"
								name="nombre"
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
								Apellido
							</FormLabel>
							<Input
								required
								type={"text"}
								placeholder="Apellido"
								name="apellido"
								bg={"gray.100"}
								border={0}
								color={"gray.500"}
								_placeholder={{
									color: "gray.500",
								}}
							/>

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
								Sugerir
							</Button>
						</Stack>
					</Box>
				</Stack>
			</Container>
		</PillPity>
	);
}
