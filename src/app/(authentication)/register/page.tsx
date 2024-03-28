import LoginForm from "@/components/Form/LoginForm";
import RegisterForm from "@/components/Form/RegisterForm";
import GoogleIcon from "@/components/Icon/GoogleIcon";
import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

const Login = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				width: 1,
				height: 1,
			}}
		>
			<Typography fontWeight={700} fontSize={"2rem"}>
				Sign Up
			</Typography>
			<Box sx={{ padding: "2% 20%", width: 1 }}>
				<Button
					fullWidth
					sx={{ bgcolor: "#FBFBFB" }}
					variant="contained"
					startIcon={<GoogleIcon />}
				>
					Register with Google
				</Button>
				<Divider
					component="div"
					role="presentation"
					sx={{
						my: "5%",
						color: "#D6D6D6",
						"&::before": { borderTop: "thin solid #D6D6D6" },
						"&::after": { borderTop: "thin solid #D6D6D6" },
					}}
					flexItem
				>
					<Typography variant="subtitle2">
						OR LOGIN WITH EMAIL
					</Typography>
				</Divider>
				<RegisterForm />
			</Box>
		</Box>
	);
};

export default Login;
