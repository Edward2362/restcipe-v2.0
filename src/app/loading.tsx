import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				position: "absolute",
				width: 1,
				height: "100vh",
				zIndex: 99999,
			}}
		>
			<CircularProgress />
			testttttttttt
		</Box>
	);
};

export default Loading;
