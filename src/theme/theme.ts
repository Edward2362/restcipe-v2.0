import { createTheme, responsiveFontSizes, Theme } from "@mui/material/styles";
import { roboto, grandifloraOne } from "./font";

let theme: Theme = createTheme({
	typography: {
		fontFamily: roboto.style.fontFamily,
		h1: { fontFamily: grandifloraOne.style.fontFamily },
	},
	palette: {
		mode: "light",
		primary: {
			main: "#FFBA08",
			contrastText: "#370617",
		},
		secondary: {
			main: "#9D0208",
			contrastText: "#FBFBFB",
		},
		text: {
			primary: "#370617",
		},
		background: {
			paper: "#FBFBFB",
			default: "#FBFBFB",
		},
		divider: "#9D0208",
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1550,
		},
	},
});

theme = responsiveFontSizes(theme);

export default theme;
