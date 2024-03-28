import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = (props: { width?: string; dark?: boolean }) => {
	const { width = null, dark = false } = props;
	return (
		<Link
			style={{
				width: width ? width : "15%",
				height: "auto",
				display: "inline-flex",
				minWidth: width ? width : "100px",
				maxWidth: width ? width : "200px",
			}}
			href={"/"}
		>
			<Image
				src={dark ? "RestcipeLogo-dark.svg" : "RestcipeLogo.svg"}
				alt="Restcipe Logo"
				width={0}
				draggable="false"
				height={0}
				priority={true}
				style={{
					width: "100%",
					height: "auto",
				}}
			/>
		</Link>
	);
};

export default Logo;
