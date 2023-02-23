import { useCallback, useEffect, useState } from "react";
import {
	Flex,
	Box,
	HStack,
	Text,
	Heading,
	Image,
} from "@chakra-ui/react";
import { muestraTodasLasFotosGaleria } from "../constantes/galeria";

export default function GaleriaFotos() {
	let arrowStyles = {
		cursor: "pointer",
		pos: "absolute",
		top: "50%",
		w: "auto",
		mt: "-22px",
		p: "16px",
		color: "white",
		fontWeight: "bold",
		fontSize: "18px",
		transition: "0.6s ease",
		borderRadius: "0 3px 3px 0",
		userSelect: "none",
		_hover: {
			opacity: 0.8,
			bg: "black",
		},
	};

	const [slides, setSlides] = useState([
		{
			nombre:
				"https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		},
		{
			nombre:
				"https://images.unsplash.com/photo-1484156818044-c040038b0719?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
		},
		{
			nombre:
				"https://images.unsplash.com/photo-1623788452350-4c8596ff40bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
		},
	]);
	const [defaultImages, SetdefaultImages] = useState([
		{
			nombre: "images/notFound.jpeg",
		},
	]);

	const [currentSlide, setCurrentSlide] = useState(0);

	const slidesCount = slides?.length;

	const prevSlide = () => {
		setCurrentSlide((s) =>
			s === 0 ? slidesCount - 1 : s - 1
		);
	};
	const nextSlide = () => {
		setCurrentSlide((s) =>
			s === slidesCount - 1 ? 0 : s + 1
		);
	};
	const setSlide = (slide) => {
		setCurrentSlide(slide);
	};

	const carouselStyle = {
		transition: "all 1.5s",
		ml: `-${currentSlide * 100}%`,
	};

	const pointsMov = {
		transition: "all 1.5s",
		ml: {
			base: `-${currentSlide * 5}%`,
			lg: `-${currentSlide * 10}%`,
			md: `-${currentSlide * 10}%`,
		},
	};
	useEffect(() => {
		// muestraTodasLasFotosGaleria().then((res) => {
		// 	setSlides(res[0]?.imagenes);
		// });
		return () => {};
	}, []);

	return (
		<Flex
			w="full"
			// bg="#424242"
			_dark={{
				Rg: "#424242",
			}}
			alignItems="center"
			justifyContent="center">
			{!slides || undefined ? (
				<Flex
					w="full"
					overflow="visible"
					pos="relative">
					<Flex h="auto" w="full" {...carouselStyle}>
						{defaultImages?.map((slide, sid) => {
							return (
								<Box key={`d-${sid}`}>
									<Text
										pos={"absolute"}
										fontSize={"2xl"}
										fontWeight={500}
										color={"white"}
										fontFamily={"body"}
										width={"100%"}
										mb={"1rem"}>
										Aun no hay fotos
									</Text>
									<Box
										p={"30px"}
										boxSize="full"
										shadow="md"
										flex="none">
										<Image
											src={slide.nombre}
											boxShadow={"dark-lg"}
											alt="carousel image"
											boxSize="full"
											objectFit="cover"
											cursor={"pointer"}
										/>
									</Box>
								</Box>
							);
						})}
					</Flex>
				</Flex>
			) : (
				<Flex
					w="full"
					overflow="visible"
					pos="relative">
					<Flex h="auto" w="full" {...carouselStyle}>
						{slides?.map((slide, sid) => {
							return (
								<Box
									p={"30px"}
									key={`slide-${sid}`}
									boxSize="full"
									shadow="md"
									flex="none">
									<Text
										backgroundColor={
											"blackAlpha.800"
										}
										boxShadow={"dark-lg"}
										borderRadius="30px"
										mb={"10px"}
										color="white"
										fontSize="xs"
										fontWeight={900}
										p="8px 12px"
										pos="absolute"
										top="3">
										{sid + 1} / {slidesCount}
									</Text>
									<Image
										src={slide.nombre}
										// src={`http://localhost:4000/galeria/uploads/${slide.nombre}`}
										boxShadow={"dark-lg"}
										alt="carousel image"
										boxSize="full"
										objectFit="cover"
										cursor={"pointer"}
										onClick={() => setSlide(sid)}
									/>
								</Box>
							);
						})}
					</Flex>

					<Text
						{...arrowStyles}
						left="0"
						onClick={prevSlide}>
						&#10094;
					</Text>

					<Text
						{...arrowStyles}
						right="0"
						onClick={nextSlide}>
						&#10095;
					</Text>

					<Box
						justify="center"
						pos="absolute"
						bottom="-3px"
						w="full"
						overflow={"hidden"}>
						<Box
							h="25px"
							display={"inline-flex"}
							{...pointsMov}
							overflow={"hidden"}>
							{Array.from({
								length: slidesCount,
							}).map((_, slide) => (
								<Box
									key={`dots-${slide}`}
									cursor="pointer"
									boxSize={["7px", null, "15px"]}
									m={{
										base: "0 0.8rem",
										lg: "0 0.8rem",
										md: '"0 0.8rem"',
									}}
									bg={
										currentSlide === slide
											? "blackAlpha.800"
											: "blackAlpha.500"
									}
									rounded="50%"
									display="inline-block"
									transition="background-color 0.6s ease"
									_hover={{
										bg: "blackAlpha.800",
									}}
									onClick={() =>
										setSlide(slide)
									}></Box>
							))}
						</Box>
					</Box>
				</Flex>
			)}
		</Flex>
	);
}
