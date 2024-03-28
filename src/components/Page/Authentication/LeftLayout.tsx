import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const LeftLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box
			sx={{
				bgcolor: "primary.main",
				position: "relative",
				height: 1,
				width: 0.5,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{children}
			<Image
				src="Mint.svg"
				alt="Mint"
				width={0}
				height={0}
				unoptimized
				draggable="false"
				style={{
					position: "absolute",
					width: "35%",
					height: "auto",
					zIndex: 1,
					top: 0,
					left: 0,
					transform: "translate(-10%, -10%)",
				}}
			/>
			<Image
				src="Chicken.svg"
				alt="Chicken"
				width={0}
				height={0}
				unoptimized
				draggable="false"
				style={{
					position: "absolute",
					width: "40%",
					height: "auto",
					zIndex: 1,
					top: 0,
					right: 0,
					transform: "translate(10%, -10%)",
				}}
			/>
			<Image
				src="Meat.svg"
				alt="Meat"
				width={0}
				height={0}
				unoptimized
				draggable="false"
				style={{
					position: "absolute",
					width: "35%",
					height: "auto",
					zIndex: 1,
					bottom: 0,
					left: 0,
					transform: "translate(-10%, 10%)",
				}}
			/>
			<Image
				src="Carrot.svg"
				alt="Carrot"
				width={0}
				height={0}
				unoptimized
				draggable="false"
				style={{
					position: "absolute",
					width: "35%",
					height: "auto",
					zIndex: 1,
					bottom: 0,
					right: 0,
					transform: "translate(10%, 10%)",
				}}
			/>
		</Box>
	);
};

export default LeftLayout;
