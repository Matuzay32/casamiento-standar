import React from "react";
import { Box } from "@chakra-ui/react";

export default function Spotify(props) {
	const { linkCancion } = props;
	return (
		<Box
			m={10}
			borderRadius={"full"}
			maxW={"270px"}
			w={"full"}
			boxShadow={"dark-lg"}
		>
			<Box
				w={"100%"}
				height={"auto"}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Box
					borderRadius={"2xl"}
					as="iframe"
					src={`https://embed.spotify.com/?uri=${linkCancion}`}
					// src="https://embed.spotify.com/?uri=https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5"
					width="100%"
					sx={{
						aspectRatio: "16/9",
					}}
				></Box>
			</Box>
		</Box>
	);
}
