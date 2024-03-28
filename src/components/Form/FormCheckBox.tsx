import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";
import React from "react";
import { Controller, Control } from "react-hook-form";

type Props = {
	control: Control<any>;
	name: string;
	label: string;
} & CheckboxProps;

const FormCheckBox = ({
	control,
	name,
	label,
	...restCheckBoxProps
}: Props) => {
	return (
		<FormControlLabel
			sx={{
				"& .MuiFormControlLabel-label": {
					typography: "body2",
				},
			}}
			control={
				<Controller
					name={name}
					control={control}
					render={({ field: { onChange, value } }) => (
						<Checkbox
							checked={value}
							onChange={onChange}
							{...restCheckBoxProps}
						/>
					)}
				/>
			}
			label={label}
		/>
	);
};

export default FormCheckBox;
