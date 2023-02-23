import React from "react";
import {
	Flex,
	Box,
	Heading,
	SimpleGrid,
	Icon,
	useColorModeValue,
	Container,
	Spacer,
} from "@chakra-ui/react";
import { FaCameraRetro } from "react-icons/fa";
import GaleriaFotos from "./GaleriaFotos";
import PillPity from "pill-pity";

export default function SectionGaleriaFotos() {
	const patterFill = useColorModeValue("white", "brand.300");

	return (
		<Flex
			textAlign={"center"}
			pt={10}
			justifyContent={"center"}
			alignItems={"center"}
			direction={"column"}
			width={"full"}
		>
			<Box
				height={"auto"}
				width={{ base: "full", sm: "lg", lg: "xl" }}
				margin={"auto"}
			>
				<Heading
					py={5}
					fontSize={48}
					fontWeight={"bold"}
					borderBottomWidth={{ base: "1px", md: "1px" }}
					color={useColorModeValue("gray.700", "gray.50")}
				>
					Galeria de fotos
				</Heading>
			</Box>
			<Box
				display={"flex"}
				justifyContent={"space-evenly"}
				flexFlow={{ base: "column", sm: "wrap", lg: "wrap" }}
				spacing={"2"}
				mt={10}
			></Box>
			<Box>
				<Icon w={"70px"} h={"70px"} as={FaCameraRetro}></Icon>
			</Box>

			<PillPity
				pos={"relative"}
				pattern={"architect"}
				patternFill={patterFill}
				patOpacity={0.5}
				bgColor={100}
				as={Box}
				overflow="hidden"
				h={"auto"}
				w={{ base: "full", sm: "full", lg: "full" }}
				display={"flex"}
				justifyContent={"space-around"}
			>
				<Box
					w={{ base: "full", sm: "full", lg: "400px" }}
					bg={"gray.200"}
					boxShadow={"Inner"}
					mt={"10"}
					mb={"10"}
					ml={"20px"}
					mr={"20px"}
				>
					<GaleriaFotos></GaleriaFotos>
				</Box>
			</PillPity>
			<Box display={"flex"} flexFlow={"column"} alignItems={"center"}>
				<Icon as={"div"} viewBox="0 0 40 35" mt={14} boxSize={10} color={100}>
					<path
						fill={"currentColor"}
						d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
					/>
				</Icon>
			</Box>
		</Flex>
	);
}
