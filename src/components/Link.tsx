import { LinkProps as MuiLinkProps, Link as MLink } from "@mui/material";
import NLink from "next/link";

export const Link = ({ sx = {}, ...restProps }: MuiLinkProps<"a">) => {
	return (
		<MLink
			component={NLink}
			underline="none"
			variant="body2"
			sx={{
				fontWeight: 700,
				...sx,
			}}
			{...restProps}
		/>
	);
};
