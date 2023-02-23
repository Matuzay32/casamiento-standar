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
import { useRouter } from "next/router";
import swal from "sweetalert";

import { PillPity } from "pill-pity";
import { ingresarUsuario } from "../constantes/usuario";

export default function IngresarComponent() {
	const patterFill = useColorModeValue("white", "brand.300");

	const refForm = useRef();
	const router = useRouter();
	const { push } = router;
	const [modalContent, setModalContent] = useState("");

	const fetchPost = async (user) => {
		//console.log(user);
		// setModalContent("");
		const { current: form } = refForm;
		const formData = new FormData(form);
		ingresarUsuario(user).then((x) => {
			if (x.token) {
				//console.log(x, "res");
				sessionStorage.setItem("token", JSON.stringify(x));
				swal({
					title: "INFO",
					text: "Usted a ingresado con exito",
					icon: "success",
				});
				if (x.rol === "ADMIN") {
					push("/backOffice");
				} else {
					push("/");
				}
			} else {
				swal({
					title: "Error",
					text: "El usuario contraseña no existe",
					icon: "error",
				});
			}
		});
		//console.log(user);
	};
	const handleSumbit = (event) => {
		const { current: form } = refForm;
		// event.preventDefault()
		const formData = new FormData(form);
		const username = formData.get("username");
		const password = formData.get("password");
		const email = formData.get("email");

		if (formData && username && password && email) {
			const user = {
				username,
				email,
				password,
			};
			fetchPost(user);
		}
		// } else {
		// 	setModalContent("Missing dates");
		// 	setTimeout(() => {
		// 		setModalContent("");
		// 	}, 1000);
		// }
	};

	return (
		<PillPity
			position={"relative"}
			w={"full"}
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
							color={"gray.800"}
							lineHeight={1.1}
							fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
						>
							Entrar
						</Heading>
						<Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
							De esta forma se puede hacer uso del back office para poder
							modificar diversas cuestiones del sitio web
						</Text>
					</Stack>
					<Box as={"form"} mt={10} ref={refForm}>
						<Stack spacing={4}>
							{/* <form ref={refForm}> */}
							<FormLabel>Username </FormLabel>
							<Input
								required
								placeholder="Username"
								name="username"
								bg={"gray.100"}
								border={0}
								color={"gray.500"}
								_placeholder={{
									color: "gray.500",
								}}
							/>
							<FormLabel>Password</FormLabel>
							<Input
								required
								type={"password"}
								placeholder="Password"
								name="password"
								bg={"gray.100"}
								border={0}
								color={"gray.500"}
								_placeholder={{
									color: "gray.500",
								}}
							/>

							<FormLabel>
								Email<Text color={"gray.500"}>(example@gmail.com)</Text>
							</FormLabel>
							<Input
								required
								name="email"
								type={"email"}
								placeholder="Email"
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
