import React from "react";
import {
	Box,
	chakra,
	Container,
	Link,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import index from "../pages/index";
import PillPity from "pill-pity";

export default function Footer({ targetas: footerLinks }) {
	const patterFill = useColorModeValue("gray.200", "gray.900");

	return (
		<PillPity
			pattern={"hideout"}
			patternFill={patterFill}
			patOpacity={0.5}
			bgColor="white"
			as={Box}
			borderTopWidth={"3px"}
		>
			<Container
				as={Stack}
				maxW={"6xl"}
				py={10}
				spacing={4}
				justify={"center"}
				alignItems={{ base: "center", lg: "flex-start", md: "center" }}
			>
				<Stack
					direction={{ base: "column", lg: "row", md: "row" }}
					justifyContent={"center"}
					alignItems={"center"}
					spacing={6}
				>
					{footerLinks?.map((elemento, index) => {
						const { href, evento } = elemento;
						return (
							<Link
								key={`${evento}${index}`}
								fontSize={"2xl"}
								fontWeight={500}
								color={100}
								fontFamily={"body"}
								width={"100%"}
								mb={"1rem"}
								textDecoration={"none"}
								href={href}
								_hover={{
									textDecoration: "none",
									fontSize: "3xl",
									fontWeight: 500,
									color: "100",
									fontFamily: "body",
									mb: "1rem",
									transition: "all .8s",
								}}
							>
								{evento}
							</Link>
						);
					})}
				</Stack>
			</Container>
		</PillPity>
	);
}
