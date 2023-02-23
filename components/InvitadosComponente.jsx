import React from "react";
import { Flex, Box, Link, chakra, Image, Heading } from "@chakra-ui/react";
export default function InvitadosComponente({
	nombre,
	apellido,
	estado,
	cantidad,
}) {
	return (
		<Flex
			_dark={{
				bg: "#3e3e3e",
			}}
			p={50}
			w={{ base: "column", sm: "wrap", lg: "wrap" }}
			alignItems="center"
			justifyContent="center"
		>
			<Box
				w="md"
				mx="auto"
				py={4}
				px={8}
				bg="white"
				_dark={{
					bg: "gray.800",
				}}
				shadow="lg"
				rounded="lg"
			>
				<Flex
					justifyContent={{
						base: "center",
						md: "end",
					}}
					mt={-16}
				>
					<Box
						w={20}
						h={20}
						rounded="full"
						bg={"white"}
						borderStyle="solid"
						borderWidth={2}
						color="200"
						justifyContent={"center"}
						alignItems={"center"}
						display={"flex"}
						_dark={{
							color: "brand.400",
						}}
					>
						<Heading
							fontSize="xl"
							color="brand.500"
							_dark={{
								color: "brand.300",
							}}
						>
							{cantidad}
						</Heading>
					</Box>
				</Flex>

				<chakra.h2
					textTransform={"capitalize"}
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
					{`${nombre} ${apellido}  `}
				</chakra.h2>

				<chakra.p
					fontSize={"x-large"}
					textTransform={"capitalize"}
					mt={2}
					color="gray.400"
					_dark={{
						color: "gray.200",
					}}
				>
					{`${estado}   `}
				</chakra.p>
			</Box>
		</Flex>
	);
}
