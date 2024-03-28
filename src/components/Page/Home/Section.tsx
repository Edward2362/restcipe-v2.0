import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import React from "react";

const Section = (props: {
	children: React.ReactElement | React.ReactElement[];
	overlay?: boolean;
	fill?: boolean;
	sx?: SxProps;
	decorations?: React.ReactElement | React.ReactElement[];
}) => {
	const {
		children,
		overlay = false,
		fill = true,
		sx = {},
		decorations = [],
	} = props;

	return (
		<Box
			component="section"
			sx={[
				{
					position: "relative",
					width: 1,
					backgroundColor: "#FBFBFB",
				},
				fill && { height: "100vh", minHeight: "633px" },
				// overlay && {
				// 	backgroundImage: "url(HomeBg.png)",
				// 	backgroundSize: "cover",
				// 	backgroundPosition: "center center",
				// },
			]}
		>
			{decorations}
			<Box
				sx={{
					width: 1,
					height: 1,
					zIndex: 1,
					position: "relative",
					px: "15%",
					backgroundImage:
						"linear-gradient(rgba(251, 251, 251, 0.7), rgba(251, 251, 251, 1), rgba(251, 251, 251, 1))",
					...sx,
				}}
			>
				{children}
			</Box>
			{overlay && (
				<Image
					alt="Background"
					style={{ zIndex: 0 }}
					priority={true}
					src="/HomeBg.png"
					fill={true}
				/>
			)}
		</Box>
	);
};

export default Section;
