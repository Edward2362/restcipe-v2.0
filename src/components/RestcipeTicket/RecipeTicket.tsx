import { grandifloraOne } from "@/theme/font";
import { Box, Divider, SxProps, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import NutritionInfo from "./NutritionInfo";

interface Nutrition {
	protein: number;
	fat: number;
	carb: number;
}

const RecipeTicket = (props: {
	image: string;
	recipeName: string;
	calories: number;
	nutrition: Nutrition;
	sx?: SxProps;
}) => {
	const { image, recipeName, calories, nutrition, sx = {} } = props;
	return (
		<Box
			sx={{
				position: "relative",
				width: "8.5em",
				height: "14em",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				...sx,
			}}
		>
			<Image
				src="pin.svg"
				alt="Pin"
				width={0}
				height={0}
				priority={true}
				style={{
					position: "absolute",
					width: "20%",
					height: "auto",
					zIndex: 1,
					top: 0,
				}}
			/>
			<Box
				sx={{
					width: "8.5em",
					height: "13.5em",
					border: 2,
					borderColor: "secondary.main",
					backgroundColor: "#fff",
					position: "relative",
					px: "10%",
					py: "12%",
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					boxShadow:
						"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
					"&::after": {
						content: "''",
						position: "absolute",
						width: 0,
						height: 0,
						borderColor: "secondary.main",
						borderBottom: "0.5em solid #9D0208",
						borderLeft: "0.5em solid transparent",
						borderTop: "0.5em solid transparent",
						bottom: 0,
						right: 0,
					},
				}}
			>
				<Box
					sx={{
						width: "80%",
						aspectRatio: "1/1",
						borderRadius: 100,
						overflow: "hidden",
						border: "2px solid #9D0208",
						mb: 1,
					}}
				>
					<Image
						src={image}
						alt="dish picture"
						width={0}
						height={0}
						priority={true}
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
						unoptimized
					/>
				</Box>
				<Typography
					color="secondary"
					noWrap={true}
					sx={{
						fontFamily: grandifloraOne.style.fontFamily,
						fontSize: "1em",
						wordWrap: "breal-all",
						textOverflow: "ellipsis",
						overflow: "hidden",
						width: 1,
						textAlign: "center",
					}}
				>
					{recipeName}
				</Typography>
				<Divider sx={{ my: 0.5 }} variant="middle" flexItem />
				<Typography sx={{ fontSize: "0.8em", mb: 1 }}>
					{calories}{" "}
					<Box sx={{ fontSize: "0.6em" }} component="span">
						kcal
					</Box>
				</Typography>
				<NutritionInfo
					bulletColor="#60A35C"
					nutritionName="PROTEIN"
					fact={nutrition.protein}
				/>
				<NutritionInfo
					bulletColor="#F48C06"
					nutritionName="FAT"
					fact={nutrition.fat}
				/>
				<NutritionInfo
					bulletColor="#9D0208"
					nutritionName="CARB"
					fact={nutrition.carb}
				/>
			</Box>
		</Box>
	);
};

export default RecipeTicket;
