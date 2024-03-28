import Image from "next/image";
import { Box, TextField, Typography } from "@mui/material";
import Section from "@/components/Page/Home/Section";
import RecipeTicket from "@/components/RestcipeTicket/RecipeTicket";
import Instructions from "@/components/Page/Home/Instructions";
import Illustrations from "@/components/Page/Home/Illustrations";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import MagicCounter from "@/components/Page/Home/MagicCounter";
import { grandifloraOne } from "@/theme/font";

export default function Home() {
	return (
		<Box component="main" sx={{ width: 1 }}>
			{/* Section 1 */}
			<Section
				overlay={true}
				sx={{ display: "flex" }}
				decorations={[
					<Image
						key={"deco-1"}
						src="/onion.svg"
						alt="Onion"
						width={0}
						height={0}
						priority={true}
						unoptimized
						style={{
							position: "absolute",
							width: "15%",
							height: "auto",
							zIndex: 2,
							bottom: 0,
							left: 0,
							transform: "translate(0, 30%)",
						}}
					/>,
					<Image
						key={"deco-2"}
						src="/cabbage.svg"
						alt="Cabbage"
						width={0}
						height={0}
						priority={true}
						unoptimized
						style={{
							position: "absolute",
							width: "15%",
							height: "auto",
							zIndex: 2,
							bottom: 0,
							right: 0,
							transform: "translate(20%, 45%)",
						}}
					/>,
				]}
			>
				<Box
					sx={{
						flex: 0.5,
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<Typography
						fontSize={{ lg: "1.5rem", xl: "2rem" }}
						fontWeight={400}
					>
						Open the fridge and
					</Typography>
					<Typography
						color="primary"
						fontFamily={grandifloraOne.style.fontFamily}
						fontSize={{ lg: "7rem", xl: "12rem" }}
					>
						Restcipe
					</Typography>
				</Box>
				<Box
					sx={{
						flex: 0.5,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						position: "relative",
					}}
					fontSize={{ md: "1.5rem", lg: "2rem", xl: "3rem" }}
				>
					<RecipeTicket
						sx={{ zIndex: 1 }}
						image={"/homepagedish.png"}
						recipeName="Schnitzel"
						calories={125}
						nutrition={{ protein: 13, fat: 1, carb: 74 }}
					/>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							position: "absolute",
							right: { md: "1.7em", lg: "2em", xl: "3em" },
							zIndex: 0,
						}}
						fontSize={{ md: "1rem", lg: "1.5rem", xl: "2.5rem" }}
					>
						<RecipeTicket
							sx={{
								"&::after": {
									content: "''",
									width: "8.5em",
									height: "13.5em",
									backgroundColor: "rgba(0, 0, 0, 0.7)",
									position: "absolute",
								},
							}}
							image={"/homepagedish2.png"}
							recipeName="Chicken Curry"
							calories={125}
							nutrition={{ protein: 37, fat: 11, carb: 52 }}
						/>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							position: "absolute",
							left: { md: "1.7em", lg: "2em", xl: "3em" },
							zIndex: 0,
						}}
						fontSize={{ md: "1rem", lg: "1.5rem", xl: "2.5rem" }}
					>
						<RecipeTicket
							sx={{
								"&::after": {
									content: "''",
									width: "8.5em",
									height: "13.5em",
									backgroundColor: "rgba(0, 0, 0, 0.7)",
									position: "absolute",
								},
							}}
							image={"/homepagedish3.png"}
							recipeName="Penne Meatballs"
							calories={199}
							nutrition={{ protein: 37, fat: 11, carb: 52 }}
						/>
					</Box>
				</Box>
			</Section>
			{/* Section 2 */}
			<Section
				sx={{
					position: "relative",
					display: "flex",
					width: 1,
					flexDirection: "column",
					fontSize: { md: "1rem", lg: "1.5rem", xl: "2.5rem" },
				}}
				decorations={
					<KeyboardArrowRightRoundedIcon
						color="secondary"
						sx={{
							position: "absolute",
							bottom: 0,
							right: 0,
							left: 0,
							top: 0,
							zIndex: 1,
							fontSize: "5em",
							margin: "auto",
						}}
					/>
				}
			>
				<Illustrations
					images={[
						{ src: "/LeftSection2.png", height: "11em" },
						{ src: "/RightSection2.png", height: "9em" },
					]}
				/>
				<Instructions
					instructions={[
						{
							title: "Look in the Fridge",
							content:
								"Wondering how many dishes that can be cooked with these simple ingredients?",
						},
						{
							title: "Go to Restcipe",
							content:
								"Discover dishes with detail guidance and nutrition information",
						},
					]}
				/>
			</Section>
			{/* Section 3 */}
			<Section
				sx={{
					position: "relative",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: 1,
					flexDirection: "column",
					fontSize: { md: "1rem", lg: "1.5rem", xl: "2.5rem" },
				}}
				decorations={[
					<Image
						key={"deco-1"}
						src="/left-s3.png"
						alt="Onion"
						width={0}
						height={0}
						unoptimized
						style={{
							position: "absolute",
							width: "30%",
							height: "auto",
							zIndex: 2,
							margin: "auto 0",
							left: 0,
							top: 0,
							bottom: 0,
							transform: "translateX(-50%)",
						}}
					/>,
					<Image
						key={"deco-2"}
						src="/left-mid-s3.png"
						alt="Onion"
						width={0}
						height={0}
						unoptimized
						style={{
							position: "absolute",
							width: "20%",
							height: "auto",
							zIndex: 2,
							margin: "auto 0",
							left: 0,
							top: 0,
							transform: "translateX(50%)",
						}}
					/>,
					<Image
						key={"deco-3"}
						src="/right-mid-s3.png"
						alt="Onion"
						width={0}
						height={0}
						unoptimized
						style={{
							position: "absolute",
							width: "20%",
							height: "auto",
							zIndex: 2,
							margin: "auto 0",
							right: 0,
							bottom: 0,
							transform: "translateX(-50%)",
						}}
					/>,
					<Image
						key={"deco-4"}
						src="/right-s3.png"
						alt="Onion"
						width={0}
						height={0}
						unoptimized
						style={{
							position: "absolute",
							width: "30%",
							height: "auto",
							zIndex: 2,
							margin: "auto 0",
							right: 0,
							top: 0,
							bottom: 0,
							transform: "translateX(50%)",
						}}
					/>,
				]}
			>
				<MagicCounter />
				<Typography sx={{ fontSize: "1em" }}>
					Recipes and more are waiting for you
				</Typography>
			</Section>
		</Box>
	);
}
