import React from "react";
import { Box } from "@mui/material";

const RightLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box
			sx={{
				bgcolor: "#FBFBFB",
				height: 1,
				width: 0.5,
				zIndex: 2,
			}}
		>
			{children}
		</Box>
	);
};

export default RightLayout;
