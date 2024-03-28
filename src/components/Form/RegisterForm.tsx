"use client";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { passwordRegex } from "@/utils/regexes";
import { Box, Button, SxProps, Typography } from "@mui/material";
import FormTextField from "./FormTextField";
import FormCheckBox from "./FormCheckBox";
import { Link } from "../Link";

const formSchema = yup.object({
	username: yup.string().required("Please fill out this field!"),
	email: yup
		.string()
		.email("Please provide valid email!")
		.required("Please fill out this field!"),
	password: yup
		.string()
		.required("Please fill out this field!")
		.matches(
			passwordRegex,
			"Please provide at least 8 characters with uppercase, lowercase, number and symbol"
		),
	retypePassword: yup
		.string()
		.oneOf([yup.ref("password")], "Passwords must match")
		.required("Please fill out this field!"),
});

type FormValues = yup.InferType<typeof formSchema>;

const defaultValues: FormValues = {
	username: "",
	email: "",
	password: "",
	retypePassword: "",
};

const RegisterForm = (props: { sx?: SxProps }) => {
	const { sx = {} } = props;

	const { handleSubmit, control } = useForm<FormValues>({
		defaultValues: defaultValues,
		resolver: yupResolver(formSchema),
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
				name="username"
				control={control}
				label="Username"
				fullWidth
				size="small"
				sx={{ mb: "1rem" }}
			/>
			<FormTextField
				name="email"
				control={control}
				label="Email"
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
				<FormTextField
					type="password"
					name="password"
					control={control}
					label="Password"
					size="small"
					sx={{ mb: "1rem", width: 0.48 }}
				/>
				<FormTextField
					type="password"
					name="retypePassword"
					control={control}
					label="Retype Password"
					size="small"
					sx={{ mb: "1rem", width: 0.48 }}
				/>
			</Box>

			<Button
				type="submit"
				fullWidth
				variant="contained"
				sx={{ mt: "1rem" }}
			>
				SIGN UP
			</Button>
			<Typography variant="body2" sx={{ mt: "1rem" }}>
				Already have an account?&nbsp;
				<Link href="/login">Sign In</Link>
			</Typography>
		</Box>
	);
};

export default RegisterForm;
