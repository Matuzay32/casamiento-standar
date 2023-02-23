import {
	Link,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Button,
	Icon,
	VStack,
} from "@chakra-ui/react";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import {
	BsFillClockFill,
	BsCameraFill,
	BsSpotify,
	BsCardChecklist,
} from "react-icons/bs";

import { GiOfficeChair } from "react-icons/gi";
import { useState } from "react";
import {
	PhoneIcon,
	AddIcon,
	WarningIcon,
	MdReceipt,
	ChevronDownIcon,
} from "@chakra-ui/icons";

const LinkItems = [
	{
		name: "Cambiar Horario ",
		icon: BsFillClockFill,
		href: "/backOffice/cambiarHorario",
	},
	{
		name: "Cambiar Foto Central",
		icon: BsCameraFill,
		href: "/backOffice/fotoCentral",
	},
	{
		name: "Fotos de la Galeria",
		icon: BsCameraFill,
		href: "/backOffice/fotosGaleria",
	},
	{
		name: "Lista de invitados",
		icon: BsCardChecklist,
		href: "/backOffice/invitados",
	},
	{
		name: "Lista de musica",
		icon: BsSpotify,
		href: "/backOffice/listaMusica",
	},
];

export default function OpcionesDelBackOffice() {
	const [size, setSize] = useState("");
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleClick = (newSize) => {
		setSize(newSize);
		onOpen();
	};

	const sizes = ["xs"];

	return (
		<>
			{sizes.map((size, index) => (
				<Button
					borderRadius={"full"}
					fontSize={{ base: "sm", lg: "large", md: "md" }}
					bg={100}
					onClick={() => handleClick(size)}
					key={`${size}${index}`}
					m={4}
					_hover={{
						backgroundColor: 200,
						color: "white",
					}}
				>
					Opciones del Back Office
					<ChevronDownIcon w={6} h={6} />
				</Button>
			))}

			<Drawer onClose={onClose} isOpen={isOpen} size={size}>
				<DrawerOverlay backdropFilter={" blur(2px)"} />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader fontWeight={500} color={100}>
						{"Cuenta"}
					</DrawerHeader>
					<DrawerBody>
						<VStack>
							{LinkItems?.map((item, index) => {
								const { name, icon, href } = item;
								return (
									<Link
										key={`${name}${index}`}
										fontSize={"large"}
										fontWeight={500}
										color={100}
										fontFamily={"body"}
										width={"100%"}
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
										<Icon mr={2} as={icon} />
										{name}
									</Link>
								);
							})}
						</VStack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}
