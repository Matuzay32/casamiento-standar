import {
	useColorModeValue,
	Box,
	Flex,
	Stack,
	Heading,
	Text,
	Container,
	SimpleGrid,
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PillPity } from "pill-pity";

export default function DatosCuenta() {
	const patterFill = useColorModeValue("white", "brand.300");

	const router = useRouter();
	const refForm = useRef();

	return (
		<PillPity
			position={"relative"}
			w={"full"}
			h={"100vh"}
			// backgroundSize={"cover"}
			// backgroundPosition={"25% 50%"}
			// backgroundImage={
			// 	"url(https://images.unsplash.com/photo-1535185384036-28bbc8035f28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80)"
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
							Regalito
						</Heading>
						{/* <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
							Estos son los datos de la cuenta
						</Text> */}
					</Stack>
					<Box mt={10} ref={refForm}>
						<Stack spacing={4}>
							<Text
								fontSize={"3xl"}
								fontWeight={500}
								color={100}
								fontFamily={"body"}
								width={"100%"}
								mb={"1rem"}
								lineHeight={1.1}
							>
								Banco Santander{" "}
							</Text>

							<Text
								fontSize={"2xl"}
								fontWeight={500}
								color={100}
								fontFamily={"body"}
								width={"100%"}
								mb={"1rem"}
								lineHeight={1.1}
							>
								Número de cuenta:{" "}
								<Text
									fontSize={"md"}
									fontWeight={500}
									color={"gray.500"}
									fontFamily={"body"}
									width={"100%"}
									mb={"1rem"}
									lineHeight={1.1}
									as={"span"}
								>
									Cuentas en Pesos 100-371669/2
								</Text>
							</Text>

							<Text
								fontSize={"2xl"}
								fontWeight={500}
								color={100}
								fontFamily={"body"}
								width={"100%"}
								mb={"1rem"}
								lineHeight={1.1}
							>
								Número de CBU:{" "}
								<Text
									fontSize={"md"}
									fontWeight={500}
									color={"gray.500"}
									fontFamily={"body"}
									width={"100%"}
									mb={"1rem"}
									lineHeight={1.1}
									as={"span"}
								>
									0720100088000037166922
								</Text>
							</Text>

							<Text
								fontSize={"2xl"}
								fontWeight={500}
								color={100}
								fontFamily={"body"}
								width={"100%"}
								mb={"1rem"}
								lineHeight={1.1}
							>
								Alias:{" "}
								<Text
									fontSize={"md"}
									fontWeight={500}
									color={"gray.500"}
									fontFamily={"body"}
									width={"100%"}
									mb={"1rem"}
									lineHeight={1.1}
									as={"span"}
								>
									maru.magno
								</Text>
							</Text>

							<Text
								fontSize={"2xl"}
								fontWeight={500}
								color={100}
								fontFamily={"body"}
								width={"100%"}
								mb={"1rem"}
								lineHeight={1.1}
							>
								Titular de la cuenta:{" "}
								<Text
									fontSize={"md"}
									fontWeight={500}
									color={"gray.500"}
									fontFamily={"body"}
									width={"100%"}
									mb={"1rem"}
									lineHeight={1.1}
									as={"span"}
								>
									Magno Maria
								</Text>
							</Text>

							<Text
								fontSize={"2xl"}
								fontWeight={500}
								color={100}
								fontFamily={"body"}
								width={"100%"}
								mb={"1rem"}
								lineHeight={1.1}
							>
								Documento:{" "}
								<Text
									fontSize={"md"}
									fontWeight={500}
									color={"gray.500"}
									fontFamily={"body"}
									width={"100%"}
									mb={"1rem"}
									lineHeight={1.1}
									as={"span"}
								>
									DNI - 30821389
								</Text>
							</Text>
						</Stack>
					</Box>
				</Stack>
			</Container>
		</PillPity>
	);
}
