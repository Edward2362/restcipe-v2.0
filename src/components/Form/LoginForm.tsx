"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { Box, Button, SxProps, Typography } from "@mui/material";
import FormTextField from "./FormTextField";
import FormCheckBox from "./FormCheckBox";
import { Link } from "../Link";

type FormValues = {
	email: string;
	password: string;
	keepSignedIn: boolean;
};

const defaultValues: FormValues = {
	email: "",
	password: "",
	keepSignedIn: false,
};

const LoginForm = (props: { sx?: SxProps }) => {
	const { sx = {} } = props;

	const { handleSubmit, control } = useForm<FormValues>({
		defaultValues: defaultValues,
	});

	const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
		console.log("data", data);
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit(onSubmit)}
			sx={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				...sx,
			}}
		>
			<FormTextField
				name="email"
				control={control}
				label="Email"
				fullWidth
				size="small"
				sx={{ mb: "1rem" }}
			/>
			<FormTextField
				type="password"
				name="password"
				control={control}
				label="Password"
				fullWidth
				size="small"
				sx={{ mb: "1rem" }}
			/>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					width: 1,
				}}
			>
				<FormCheckBox
					control={control}
					name="keepSignedIn"
					size="small"
					label="Remember me!"
				/>
				<Link href={"#"}>Forget password</Link>
			</Box>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				sx={{ mt: "1rem" }}
			>
				SIGN IN
			</Button>
			<Typography variant="body2" sx={{ mt: "1rem" }}>
				Don&apos;t have an account yet?&nbsp;
				<Link href="/register">Sign Up</Link>
			</Typography>
		</Box>
	);
};

export default LoginForm;
