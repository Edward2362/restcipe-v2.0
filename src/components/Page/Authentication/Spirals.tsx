"use client";

import { Box } from "@mui/material";
import React, { useId, useLayoutEffect, useRef, useState } from "react";

const Spirals = () => {
	const spirals = useRef<HTMLDivElement>(null);
	const id = useId();
	const [spiralsHeight, setSpiralsHeight] = useState<number>(0);

	const numberOfSpiral =
		Math.floor(spiralsHeight / (spiralsHeight * 0.04 + 24)) - 2;

	useLayoutEffect(() => {
		if (spirals.current) {
			const { height } = spirals.current?.getBoundingClientRect();
			setSpiralsHeight(height);
		}
	}, []);

	const loadSpiral = () => {
		const result = [];
		for (let index = 0; index < numberOfSpiral; index++) {
			result.push(<Spiral key={id + index} />);
		}
		return result;
	};

	return (
		<Box
			ref={spirals}
			sx={{
				position: "absolute",
				zIndex: 99,
				fontSize: { md: "1rem", lg: "1.5rem", xl: "2.5rem" },
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				height: 1,
			}}
		>
			{loadSpiral()}
		</Box>
	);
};

const Spiral = () => {
	return (
		<Box
			sx={{
				position: "relative",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				marginY: "12px",
				gap: "1.1em",
				height: 0.04,
			}}
		>
			<Box
				sx={{
					height: 1,
					aspectRatio: "1/1",
					bgcolor: "secondary.light",
					boxShadow:
						"rgb(50, 50, 93, 0.25) 3px 3px 6px 0px inset, rgba(0, 0, 0, 0.3) -3px -3px 6px 1px inset",
				}}
			/>
			<Box
				sx={{
					height: 1,
					aspectRatio: "1/1",
					bgcolor: "primary.light",
					boxShadow:
						"rgb(50, 50, 93, 0.25) 3px 3px 6px 0px inset, rgba(0, 0, 0, 0.3) -3px -3px 6px 1px inset",
				}}
			/>
			<Box
				sx={{
					position: "absolute",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					zIndex: 1,
					width: 1,
					height: 1,
					gap: 0.2,
				}}
			>
				<Box
					sx={{
						width: 0.67,
						height: 0.2,
						bgcolor: "#370617",
						borderRadius: "100px",
					}}
				/>
				<Box
					sx={{
						width: 0.67,
						height: 0.2,
						bgcolor: "#370617",
						borderRadius: "100px",
					}}
				/>
			</Box>
		</Box>
	);
};

export default Spirals;
