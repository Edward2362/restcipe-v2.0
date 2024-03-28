import { Box } from "@mui/material";
import React from "react";
import Spirals from "./Spirals";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box
			sx={{
				position: "relative",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: 1,
				height: "100vh",
				minHeight: "650px",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					width: 0.7,
					height: 0.8,
					bgcolor: "#FBFBFB",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					overflow: "hidden",
					boxShadow:
						"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;",
				}}
			>
				<Spirals />
				{children}
			</Box>
			<Box sx={{ bgcolor: "secondary.light", height: 1, width: 0.5 }} />
			<Box sx={{ bgcolor: "primary.light", height: 1, width: 0.5 }} />
		</Box>
	);
};

export default Layout;
